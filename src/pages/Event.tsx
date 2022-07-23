import { Button, Row, Modal } from 'antd';
import React, {FC, useState} from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';

const Event: FC = () => {

const [isModalVisible, setIsModalVisible] = useState(false);

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
        <EventForm/>
      </Modal>
    </div>
  );
};

export default Event;
