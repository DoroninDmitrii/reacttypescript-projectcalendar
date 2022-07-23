import { Form, Input } from 'antd';
import React from 'react';
import { rules } from '../utils/utils';

const EventForm = () => {
  return (
    <Form>
    <Form.Item
      label="Event description"
      name="description"
      rules={[rules.required('Please input information')]}
      >
        <Input autoComplete='off'/>
    </Form.Item>
    </Form>
  );
};

export default EventForm;
