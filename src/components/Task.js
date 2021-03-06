import React from 'react'

export default React.createClass({
  render () {
    return (
      <li className='line-item'>
        <span className='task'>
          {this.props.name}
        </span>
        -
        <button
          className='modal-button'
          onClick={() => {alert('modal!')}}>
          Set Task Info
        </button>
        <button
          className='delete-button'
          onClick={() => {this.props.deleteTask(this.props.index)}}>
          Delete Task
        </button>
      </li>
    )
  }
})
