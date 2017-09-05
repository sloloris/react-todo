require('../../styles/singletaskitem.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SingleTaskItem extends Component {

  static propTypes = {
    task: PropTypes.string.isRequired
  }

  static defaultProps = {
    task: "ERROR SAVING TASK"
  }

  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      task: this.props.task
    }
  }

  _toggleCheckbox = (event) => {
    // check if syntax of ternary operator is correct
    completed==false ? 
      this.setState({
        ...this.state,
        completed: true
      }) :
      this.setState({
        ...this.state,
        completed: false
      })
  }


  render = () => {
    console.log('task = ', this.state.task)
    return(
      <div className='task-item-container'>
        *insert checkbox here* { this.state.task }
      </div>
      )
  }
}

export default SingleTaskItem