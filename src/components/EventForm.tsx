import { DatePicker, Form, Input, Button, Row, Select } from 'antd';
import { Moment } from 'moment';
import React, {FC, useState} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { formatDate } from '../utils/date';
import { rules } from '../utils/utils';

interface EventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({guests, submit}) => {

  const {user} = useTypedSelector(state => state.authReducer);

  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({...event, date: formatDate(date.toDate())});
    }
  };

  const onSubmit = () => {
    submit({...event, author: user.username});
  };


  return (
    <Form onFinish={onSubmit}>
    <Form.Item
      label="Event description"
      name="description"
      rules={[rules.required('Please input information')]}
      >
        <Input autoComplete='off' value={event.description} onChange={e => setEvent({...event, description: e.target.value})} />
    </Form.Item>

    <Form.Item
      label="Event data"
      name="data"
      rules={[rules.required('Please input information'), rules.isDateAfter('This date is passed')]}
      >
        <DatePicker onChange={(date) => selectDate(date)}/>
    </Form.Item>

    <Form.Item
      label="Chose guest"
      name="guest"
      rules={[rules.required('Please input information')]}
      >
      <Select onChange={(guest: string) => setEvent({...event, guest})}>
        {guests.map(guests => 
          <Select.Option key={guests.username} value={guests.username}>
            {guests.username}
          </Select.Option>
        )}
    </Select>

    </Form.Item>



    <Row justify="end">
    <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
    </Form.Item>
    </Row>
    </Form>
  );
};

export default EventForm;
