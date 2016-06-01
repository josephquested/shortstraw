import React from 'react'

export default class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <li className='line-item'>
        <span className='user'>
          {this.props.name}
        </span>
        -
        <span className='user-happiness'>
          Happiness: {this.props.happiness}
        </span>
        -
        <button
          className='modal-button'
          onClick={() => {this.props.openModal(this.props)}}>
          Set Preferred Tasks
        </button>
        <button
          className='delete-button'
          onClick={() => {this.props.deleteUser(this.props.index)}}>
          Delete User
        </button>
      </li>
    )
  }
}
