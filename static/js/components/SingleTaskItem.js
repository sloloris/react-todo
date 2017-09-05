require('../../styles/singletaskitem.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SingleTaskItem extends Component {

  static propTypes = {
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    task: "ERROR SAVING TASK",
    completed: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.completed,
      task: this.props.task
    }
  }

  _toggleCheckbox = () => {
    // check if syntax of ternary operator is correct
    if (this.state.completed == false) {
      this.setState({
        ...this.state,
        completed: true
      })
      // var completedTask = this.state.task;
      // completedTask.strike();
    } else {
      this.setState({
        ...this.state,
        completed: false
      })
    }
  }


  render = () => {
    console.log('task = ', this.state.task)
    console.log('completed = ', this.state.completed)
    return(
      <div className='task-item-container'>
        <input id="checkbox" type="checkbox" onChange={this._toggleCheckbox} /> { this.state.task }
      </div>
      )
  }
}

export default SingleTaskItem