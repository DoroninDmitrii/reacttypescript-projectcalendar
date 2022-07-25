import { DatePicker, Form, Input, Button, Row, Select } from 'antd';
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

    <Form.Item
      label="Event data"
      name="data"
      rules={[rules.required('Please input information')]}
      >
      <Select>
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
      <Select.Option value="Yiminghe">yiminghe</Select.Option>
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
