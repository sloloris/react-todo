require('../../styles/singletaskitem.css')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SingleTaskItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: '',
      completed: false,
    }
  }

  _onCheckMarkCompleted = (event) => {
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