require('../../styles/todolist.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleTaskItem from './SingleTaskItem';
import classnames from 'classnames';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      displayAddField: false,
      taskInputText: ''
    }
  }

  _onClickNewTask = (event) => {
    this.setState({
      ...this.state,
      displayAddField: true
    })
  }

  _onClickCancel = (event) => {
    this.setState({
      ...this.state,
      displayAddField: false
    })
  }

  _onClickAddTask = (event) => {
    var newTodos = this.state.todos.slice()
    newTodos.push(this.state.taskInputText)
    this.setState({
      ...this.state,
      todos: newTodos,
      displayAddField: false
    })
  }

  _onChangeTaskInput = (event) => {
    this.setState({
      ...this.state,
      taskInputText: event.target.value
    })
  }

  _generateIndividualTaskItems = (event) => {
    var todos = this.state.todos
    return todos.map((todo, index) => {
      console.log(todo)
      // error is where todo is not getting passed to SingleTaskItem component
      return (
        <div className='single-task-item' key={index}>
          <SingleTaskItem task={todo} /> 
        </div>
      )
    })
  }

  render = () => {
    console.log(this.state.todos)
    var addNewTaskClass = classnames({ 'no-display': !this.state.displayAddField })
    return (
    <div className='todo-list-container'>
      you have entered TodoList
      <div className='btn btn-new-task' 
        onClick={ this._onClickNewTask }>
        New Task
      </div>
      <div className={ addNewTaskClass }>
        <div className='btn btn-cancel' 
          onClick={ this._onClickCancel }>
          Cancel
        </div>
        <div className='btn btn-add-task' 
          onClick={ this._onClickAddTask }>
          Add
        </div>
        <textarea 
          className='new-task-field'
          value={ this.state.taskInputText }
          onChange={ this._onChangeTaskInput } />
      </div>
      <div className='todo-item-list'>
        task components should be generated here
        { this._generateIndividualTaskItems() }
      </div>
    </div>
      
    )
  }
}

export default TodoList