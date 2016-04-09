import React from 'react'

export default React.createClass({
  render () {
    return (
      <li className='task-name'>
        <button
          className='delete-button'
          onClick={() => {this.props.deleteTask(this.props.index)}}>
        </button>
        <span className='task-name'>
          {this.props.name}
        </span>
      </li>
    )
  }
})
