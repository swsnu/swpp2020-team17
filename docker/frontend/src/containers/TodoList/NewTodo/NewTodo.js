import React, { Component } from 'react';


import './NewTodo.css';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

class NewTodo extends Component {
  state = {
    title: '',
    content: '',
    dueDate: {
      year: '',
      month: '',
      date: '',
    },
  }

  componentDidMount() {
    const now = new Date();
    this.setState({
      ...this.state,
      dueDate: {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
      },
    })
  }

  postTodoHandler = () => {
    this.props.onStoreTodo(this.state.title, this.state.content, this.state.dueDate);
  }

  render() {
    return (
      <div className="NewTodo">
        <h1>Add a New Todo!</h1>
        <label>Title</label>
        <input
          id="titleInput"
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        ></input>
        <label>Content</label>
        <textarea rows="4" type="text" value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        >
        </textarea>
        <label>Due Date</label>
        year <input
          type="text"
          value={this.state.dueDate.year}
          onChange={(event) => this.setState({
            dueDate: {...this.state.dueDate, year: event.target.value }
          })}
        ></input>
        month <input
          type="text"
          value={this.state.dueDate.month}
          onChange={(event) => this.setState({
            dueDate: {...this.state.dueDate, month: event.target.value }
          })}
        ></input>
        date <input
          type="text"
          value={this.state.dueDate.date}
          onChange={(event) => this.setState({
            dueDate: {...this.state.dueDate, date: event.target.value }
          })}
        ></input>
        <button onClick={() => this.postTodoHandler()}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStoreTodo: (title, content, dueDate) =>
      dispatch(actionCreators.postTodo({ title: title, content: content, dueDate: dueDate})),
  }
};

export default connect(null, mapDispatchToProps)(NewTodo);
