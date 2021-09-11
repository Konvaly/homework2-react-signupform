import { parse } from 'date-fns';
import { addDays } from 'date-fns/esm';
import React from 'react';
import CalendarDate from '../CalendarDate';

const getDaysOfWeek = (week, year) => {
  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
  const days = [];
  for (let i = 0; i < 7; ++i) {
    const dateIndex = addDays(startOfWeek, i);
    days.push(<CalendarDate key={i} date={dateIndex.getDate()} />);
  }
  return days;
};

function Week (props) {
  const { week, year } = props;
  return <tr>{getDaysOfWeek(week, year)}</tr>;
}

export default Week;
