require('../../styles/todolist.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HelloWorld from './HelloWorld';
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
      taskText: event.target.value
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
      { this.state.todos }
    </div>
      
    )
  }
}

export default TodoList