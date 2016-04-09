import React from 'react'

export default React.createClass({
  render () {
    return (
      <li className='user-name'>
        <button
          className='delete-button'
          onClick={() => {this.props.deleteUser(this.props.index)}}>
        </button>
        {this.props.name}
      </li>
    )
  }
})
