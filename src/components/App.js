import React from 'react'
import UserList from './UserList'
import TaskList from './TaskList'
import AddForm from './AddForm'

export default React.createClass({
  addUser: function (name) {
    if (name === '') return
    this.props.store.dispatch({
      type: 'ADD USER',
      state: this.props.appState,
      name: name
    })
  },

  deleteUser: function (index) {
    this.props.store.dispatch({
      type: 'DELETE USER',
      state: this.props.appState,
      index: index
    })
  },

  addTask: function (name) {
    if (name === '') return
    this.props.store.dispatch({
      type: 'ADD TASK',
      state: this.props.appState,
      name: name
    })
  },

  deleteTask: function (index) {
    this.props.store.dispatch({
      type: 'DELETE TASK',
      state: this.props.appState,
      index: index
    })
  },

  render () {
    return (
      <div className='app'>
        <h1>shortstraw</h1>
        <UserList
          users={this.props.appState.users}
          deleteUser={this.deleteUser}
        />
        <AddForm addItem={this.addUser} type='User' />
        <TaskList
          tasks={this.props.appState.tasks}
          deleteTask={this.deleteTask}
        />
        <AddForm addItem={this.addTask} type='Task'/>
      </div>
    )
  }
})
