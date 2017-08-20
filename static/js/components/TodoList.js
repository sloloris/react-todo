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
      taskText: ''
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
    this.setState({
      ...this.state,
      todos: this.state.todos.push(event.target.value),
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
          Add Task
        </div>
        <textarea 
          className='new-task-field'
          value={ this.state.taskText }
          onChange={ this._onChangeTaskInput } />
      </div>
    </div>
      
    )
  }
}

export default TodoList