import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Calendar from '../../components/Calendar/Calendar';

import * as actionCreators from '../../store/actions/index';

import './TodoCalendar.css';

class TodoCalendar extends Component {
  state = {
    year: 2019,
    month: 10,
  }
  componentDidMount() {
    this.props.onGetAll();
  }

  handleClickPrev = () => {
    this.setState({
      year: this.state.month === 1 ? this.state.year - 1 : this.state.year,
      month: this.state.month === 1 ? 12 : this.state.month - 1
    })
  }

  handleClickNext = () => {
    this.setState({
      year: this.state.month === 12 ? this.state.year + 1 : this.state.year,
      month: this.state.month === 12 ? 1 : this.state.month + 1
    })
  }

  render() {
    return (
      <div>
        <div className="link"><NavLink to='/todos' exact>See TodoList</NavLink></div>
        <div className="header">
          <button onClick={this.handleClickPrev}> prev month </button>
          {this.state.year}.{this.state.month}
          <button onClick={this.handleClickNext}> next month </button>
        </div>
        <Calendar
          year={this.state.year}
          month={this.state.month}
          todos={this.props.storedTodos}
          clickDone={this.props.onToggleTodo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storedTodos: state.td.todos,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: (id) =>
      dispatch(actionCreators.toggleTodo(id)),
    onGetAll: () =>
      dispatch(actionCreators.getTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoCalendar));
