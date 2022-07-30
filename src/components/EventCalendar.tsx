import { Calendar } from 'antd';
import { Moment } from 'moment';
import React, {FC} from 'react';
import { IEvent } from '../models/IEvent';

interface EventCalendarProps {
  event: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({event}) => {

  const dateCellRender = (value: Moment) => {
    console.log('hello')

    const listData = getListData(value);
    return (
      <div></div>
    );
  };

  return (
    <Calendar dateCellRender={dateCellRender}/>
  );
};

export default EventCalendar
