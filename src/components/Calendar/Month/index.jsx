import { format, getWeek, getWeeksInMonth } from 'date-fns';
import React from 'react';
import Week from '../Week';

const getWeeks = date => {
  const weeks = [];
  const year = date.getFullYear();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstWeekOfMonth = getWeek(firstDayOfMonth);

  for (
    let i = firstWeekOfMonth;
    i < firstWeekOfMonth + getWeeksInMonth(date);
    i++
  ) {
    weeks.push(<Week key={i} week={i} year={year} />);
  }

  return weeks;
};

function Month (props) {
  const { date } = props;
  return (
    <section>
      <table>
        <caption>{format(date, 'MMMM, y')}</caption>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{getWeeks(date)}</tbody>
      </table>
    </section>
  );
}

export default Month;
