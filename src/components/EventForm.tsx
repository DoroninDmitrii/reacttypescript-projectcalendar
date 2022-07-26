import { DatePicker, Form, Input, Button, Row, Select } from 'antd';
import React, {FC, useState} from 'react';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { rules } from '../utils/utils';

interface EventFormProps {
  guests: IUser[]
}

const EventForm: FC<EventFormProps> = ({guests}) => {

  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent)


  return (
    <Form>
    <Form.Item
      label="Event description"
      name="description"
      rules={[rules.required('Please input information')]}
      >
        <Input autoComplete='off'/>
    </Form.Item>

    <Form.Item
      label="Event data"
      name="data"
      rules={[rules.required('Please input information')]}
      >
        <DatePicker/>
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
