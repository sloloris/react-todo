require('../../styles/todolist.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HelloWorld from './HelloWorld';


class TodoList extends Component {


  render = () => {
    return (
    <div className='todo-list-container'>
      you have entered TodoList
      <HelloWorld />
    </div>
    )
  }
}

export default TodoList