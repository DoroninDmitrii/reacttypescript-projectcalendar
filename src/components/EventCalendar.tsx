import { Calendar } from 'antd';
import React, {FC} from 'react';
import { IEvent } from '../models/IEvent';

interface EventCalendarProps {
  event: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = () => {

  return (
    <Calendar/>
  );
};


export default EventCalendar
