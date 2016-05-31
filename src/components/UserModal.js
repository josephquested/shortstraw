import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <h2 ref="subtitle">{this.props.user.name}'s Preferred Tasks</h2>
        <button onClick={this.props.closeModal}> Close </button>
      </div>
    )
  }
})
