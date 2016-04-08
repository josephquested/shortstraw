import React from 'react'

export default React.createClass({
  render () {
    return (
      <li className='user-name'><button>test</button>{this.props.name}</li>
    )
  }
})
