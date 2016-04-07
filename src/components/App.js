import React from 'react'
import UserList from './UserList'
import AddUserForm from './AddUserForm'

export default React.createClass({
  getInitialState: function () {
    return {
      users: [<li>Charles</li>, <li>Simon</li>, <li>Mix</li>]
    }
  },

  render () {
    return (
      <div className='app'>
        <h1>shortstraw</h1>
        <UserList users={this.state.users} />
        <AddUserForm />
      </div>
    )
  }
})
