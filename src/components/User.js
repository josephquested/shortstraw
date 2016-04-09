import React from 'react'

export default React.createClass({
  render () {
    return (
      <li className='user-name'>
        <button className='delete-button' onClick={()=> {Ω('hello')}}></button>
        {this.props.name}
      </li>
    )
  }
})
