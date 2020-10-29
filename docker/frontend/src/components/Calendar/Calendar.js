import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import './Calendar.css';

const CALENDAR_HEADER = (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell className="sunday">Sun</Table.HeaderCell>
      <Table.HeaderCell>Mon</Table.HeaderCell>
      <Table.HeaderCell>Tue</Table.HeaderCell>
      <Table.HeaderCell>Wed</Table.HeaderCell>
      <Table.HeaderCell>Thu</Table.HeaderCell>
      <Table.HeaderCell>Fri</Table.HeaderCell>
      <Table.HeaderCell>Sat</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

const renderCalenderBody = (dates, todos, clickDone) => {
  let i = 0;
  const rows = [];
  for (let week=0; week<5; week++){
    let day = 0; // Sunday

    let row = [];
    for (let day=0; day<7; day++) {
      const date = dates[i];
      if (date !== undefined && day === date.getDay()) {
        row.push(
          <Table.Cell className={`cell ${day === 0 && 'sunday'}`} key={7*week+day}>
            <div className="date">{date.getDate()}</div>
            {
              todos.filter(todo => {
                return todo.year === date.getFullYear() &&
                  todo.month === date.getMonth() &&
                  todo.date === date.getDate();
              }).map(todo => {
                return (
                  <div
                    key={todo.id}
                    className={`todoTitle ${todo.done ? 'done':'notdone'}`}
                    onClick={() => clickDone(todo.id)}>
                    {todo.title}
                  </div>
                )
              })
            }
          </Table.Cell>
        )
        i++;
      } else {
        row.push(<Table.Cell key={7*week+day}> </Table.Cell>)
      }
    }
    rows.push(row);
  }

  return (
    <Table.Body>
      {rows.map((row, i) => (<Table.Row key={i}>{row}</Table.Row>))}
    </Table.Body>
  );
}

const renderCalendar = (dates, todos, clickDone) => (
  <Table striped style={{"height": "600px", "width": "600px"}}>
    {CALENDAR_HEADER}
    {renderCalenderBody(dates, todos, clickDone)}
  </Table>
)

const Calendar = (props) => {
  const dates = [];
  const year = props.year;
  const month = props.month - 1;
  let date = 1;
  let maxDate = (new Date(year, month + 1, 0)).getDate();

  for (let date=1; date<=maxDate; date++) {
    dates.push(new Date(year, month, date));
  }

  return renderCalendar(dates, props.todos, props.clickDone);
}

export default Calendar
