import React from 'react'
import UserList from './UserList'
import AddUserForm from './AddUserForm'

export default React.createClass({
  addUser: function (user) {
    if (user === '') return
    Ω(`I'm going to add the user: ${user}`)
    this.props.store.dispatch({
      type: 'ADD USER',
      state: this.props.appState,
      user: user
    })
  },

  generateUserList: function () {
    return this.props.appState.users.map((user) => {
      return (<li>{user}</li>)
    })
  },

  render () {
    return (
      <div className='app'>
        <h1>shortstraw</h1>
        <UserList users={this.generateUserList()} />
        <AddUserForm addUser={this.addUser} />
      </div>
    )
  }
})
