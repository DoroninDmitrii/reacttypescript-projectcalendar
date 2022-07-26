import { Button, Row, Modal } from 'antd';
import React, {FC, useEffect, useState} from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/userAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Event: FC = () => {

const [isModalVisible, setIsModalVisible] = useState(false);

const {fetchGuests} = useActions();
const {guests} = useTypedSelector(state => state.EventReducer);

useEffect(() => {
  fetchGuests()
}, [])

  return (
    <div>
      <EventCalendar event={[]}/>

      <Row justify="center">
          <Button
          onClick={() => setIsModalVisible(true)}
          >Add event</Button>
      </Row>

      <Modal title="Add event"
       visible={isModalVisible} 
       footer={null}
       onCancel={() => setIsModalVisible(false)}
       >
        <EventForm guests={guests}/>
      </Modal>
    </div>
  );
};

export default Event;
