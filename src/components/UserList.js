import React from 'react'
import User from './User'

export default React.createClass({
  generateUserList: function () {
    return this.props.users.map((user, index) => {
      return (
        <User
          key={index}
          index={index}
          name={user}
          deleteUser={this.props.deleteUser}
        />
      )
    })
  },

  render () {
    return (
      <div className='user-list'>
        <ul>
          {this.generateUserList()}
        </ul>
      </div>
    )
  }
})
