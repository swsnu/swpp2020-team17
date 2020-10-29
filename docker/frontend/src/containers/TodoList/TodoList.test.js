import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import TodoList from './TodoList';
import { getMockStore } from '../../test-utils/mocks';
import { history } from '../../store/store';
import * as actionCreators from '../../store/actions/todo';

jest.mock('../../components/Todo/Todo', () => {
  return jest.fn(props => {
    return (
      <div className="spyTodo">
        <div className="title" onClick={props.clickDetail}>
          {props.title}
        </div>
        <button className="doneButton" onClick={props.clickDone} />
        <button className="deleteButton" onClick={props.clickDelete} />
      </div>);
  });
});

const stubInitialState = {
  todos: [
    {id: 1, title: 'TODO_TEST_TITLE_1', done: false},
    {id: 2, title: 'TODO_TEST_TITLE_2', done: false},
    {id: 3, title: 'TODO_TEST_TITLE_3', done: false},
  ],
  selectedTodo: null,
};

const mockStore = getMockStore(stubInitialState);

describe('<TodoList />', () => {
  let todoList, spyGetTodos;

  beforeEach(() => {
    todoList = (
      <Provider store={mockStore}>
        <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact
            render={() => <TodoList title="TODOLIST_TEST_TITLE" />} />
        </Switch>
        </ConnectedRouter>
      </Provider>
    );
    spyGetTodos = jest.spyOn(actionCreators, 'getTodos')
      .mockImplementation(() => { return dispatch => {}; });
  })

  it('should render Todos', () => {
    const component = mount(todoList);
    const wrapper = component.find('.spyTodo');
    expect(wrapper.length).toBe(3);
    expect(wrapper.at(0).text()).toBe('TODO_TEST_TITLE_1');
    expect(wrapper.at(1).text()).toBe('TODO_TEST_TITLE_2');
    expect(wrapper.at(2).text()).toBe('TODO_TEST_TITLE_3');
    expect(spyGetTodos).toBeCalledTimes(1);
  });

  it(`should call 'clickTodoHandler'`, () => {
    const spyHistoryPush = jest.spyOn(history, 'push')
      .mockImplementation(path => {});
    const component = mount(todoList);
    const wrapper = component.find('.spyTodo .title').at(0);
    wrapper.simulate('click');
    expect(spyHistoryPush).toHaveBeenCalledWith('/todos/1');
  });

  it(`should call 'clickDelete'`, () => {
    const spyDeleteTodo = jest.spyOn(actionCreators, 'deleteTodo')
      .mockImplementation(id => { return dispatch => {}; });
    const component = mount(todoList);
    const connectedRouter = component.find(ConnectedRouter);
    const wrapper = component.find('.spyTodo .deleteButton').at(0);
    wrapper.simulate('click');
    expect(spyDeleteTodo).toHaveBeenCalledTimes(1);
  });

  it(`should call 'clickDone'`, () => {
    const spyToggleTodo = jest.spyOn(actionCreators, 'toggleTodo')
      .mockImplementation(id => { return dispatch => {}; });
    const component = mount(todoList);
    const wrapper = component.find('.spyTodo .doneButton').at(0);
    wrapper.simulate('click');
    expect(spyToggleTodo).toBeCalledTimes(1);
  });
});

