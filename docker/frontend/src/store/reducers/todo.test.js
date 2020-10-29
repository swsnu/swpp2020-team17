import React from 'react';

import reducer from './todo';
import * as actionTypes from '../actions/actionTypes';

const stubTodo = {id: 1, title: 'SWPP', content: 'Study mid-term', done: false};

describe('Todo Reducer', () => {
  it('should return default state', () => {
    const newState = reducer(undefined, {}); // initialize
    expect(newState).toEqual({todos: [], selectedTodo: null});
  });

  it('should add todo', () => {
    const newState = reducer(undefined, {
      type: actionTypes.ADD_TODO,
      id: stubTodo.id,
      title: stubTodo.title,
      content: stubTodo.content,
      done: stubTodo.done,
    });
    expect(newState).toEqual({
      todos: [stubTodo],
      selectedTodo: null
    });
  });

  it('should delete todo', () => {
    const stubInitialState = {
      todos: [stubTodo],
      selectedTodo: null,
    };
    const newState = reducer(stubInitialState, {
      type: actionTypes.DELETE_TODO,
      targetID: 1,
    });
    expect(newState).toEqual({
      todos: [],
      selectedTodo: null
    });
  });

  it('should toggle todo', () => {
    const stubInitialState = {
      todos: [stubTodo],
      selectedTodo: null,
    };
    let newState = reducer(stubInitialState, {
      type: actionTypes.TOGGLE_DONE,
      targetID: 1,
    });
    expect(newState).toEqual({
      todos: [{...stubTodo, done: true}],
      selectedTodo: null}
    );
    newState = reducer(newState, {
      type: actionTypes.TOGGLE_DONE,
      targetID: 1,
    });
    expect(newState).toEqual({
      todos: [{...stubTodo, done: false}],
      selectedTodo: null}
    );
    newState = reducer(newState, {
      type: actionTypes.TOGGLE_DONE,
      targetID: 2,
    });
    expect(newState).toEqual({
      todos: [{...stubTodo, done: false}],
      selectedTodo: null}
    );
  });

  it('should get todo', () => {
    const stubSelectedTodo = {id: 1, title: 'title', content: 'content'};
    const newState = reducer(undefined, {
      type: actionTypes.GET_TODO,
      target: stubSelectedTodo,
    });
    expect(newState).toEqual({
      todos: [],
      selectedTodo: stubSelectedTodo
    });
  });

  it('should get all todos', () => {
    const stubTodos = [
      {id: 1, title: '1', content: '1', done: false},
      {id: 2, title: '2', content: '2', done: false},
      {id: 3, title: '3', content: '3', done: false},
    ];
    const newState = reducer(undefined, {
      type: actionTypes.GET_ALL,
      todos: stubTodos,
    });
    expect(newState).toEqual({
      todos: stubTodos,
      selectedTodo: null,
    });
  });
})

