import React from 'react'
import Task from './Task'

export default React.createClass({
  generateTaskList: function () {
    return this.props.tasks.map((task, index) => {
      return (
        <Task
          key={index}
          index={index}
          name={task.name}
          deleteTask={this.props.deleteTask}
        />
      )
    })
  },

  render () {
    return (
      <div className='task-list'>
        <ul>
          {this.generateTaskList()}
        </ul>
      </div>
    )
  }
})
