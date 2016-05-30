import React from 'react'
import User from './User'

export default React.createClass({
  generateUserList: function () {
    return this.props.users.map((user, index) => {
      return (
        <User
          key={index}
          index={index}
          name={user.name}
          happiness={user.happiness}
          deleteUser={this.props.deleteUser}
          openModal={this.props.openModal}
        />
      )
    })
  },

  render () {
    return (
      <div className='user-list'>
        <h2>Users</h2>
        <ul>
          {this.generateUserList()}
        </ul>
      </div>
    )
  }
})
