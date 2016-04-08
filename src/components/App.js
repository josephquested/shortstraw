import React from 'react'
import UserList from './UserList'
import AddUserForm from './AddUserForm'

export default React.createClass({
  addUser: function (user) {
    if (user === '') return
    this.props.store.dispatch({
      type: 'ADD USER',
      state: this.props.appState,
      user: user
    })
  },

  render () {
    return (
      <div className='app'>
        <h1>shortstraw</h1>
        <UserList users={this.props.appState.users} />
        <AddUserForm addUser={this.addUser} />
      </div>
    )
  }
})
