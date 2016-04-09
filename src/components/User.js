import React from 'react'

export default React.createClass({
  render () {
    return (
      <li className='user-name'>
        <button
          className='delete-button'
          onClick={() => {this.props.deleteUser(this.props.index)}}>
        </button>
        <span className='user-name'>
          {this.props.name}
        </span>
        -
        <span className='user-happiness'>
          Happiness: {this.props.happiness}
        </span>
      </li>
    )
  }
})
