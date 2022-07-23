import { DatePicker, Form, Input, Button, Row } from 'antd';
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

    <Form.Item
      label="Event data"
      name="data"
      rules={[rules.required('Please input information')]}
      >
        <DatePicker/>
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
