import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='user-list'>
        <ul>
          {this.props.users}
        </ul>
      </div>
    )
  }
})
