import React from 'react'
import UserList from './UserList'
import AddUserForm from './AddUserForm'

export default React.createClass({
  getInitialState: function () {
    return {
      users: this.props.appState.users
    }
  },

  addUser: function (name) {
    if (name === '') return
    Ω(`I'm going to add the user: ${name}`)
    this.props.store()
  },

  render () {
    return (
      <div className='app'>
        <h1>shortstraw</h1>
        <UserList users={this.state.users} />
        <AddUserForm addUser={this.addUser} />
      </div>
    )
  }
})
