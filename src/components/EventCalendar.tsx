import { Calendar } from 'antd';
import { Moment } from 'moment';
import React, {FC} from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  event: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({event}) => {

  const dateCellRender = (value: Moment) => {
   
    const formateDate = formatDate(value.toDate());
    const currentFormatDate = event.filter(ev => ev.date === formateDate);
  
    return (
      <div>
        {currentFormatDate.map((ev, index) => 
        <div key={index}>{ev.description}</div>
        )}
      </div>

    );
  };

  return (
    <Calendar dateCellRender={dateCellRender}/>
  );
};

export default EventCalendar
