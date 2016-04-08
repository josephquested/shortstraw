import React from 'react'

export default React.createClass({
  handleNameField: function (e) {
    this.setState({
      name: e.target.value
    })
  },

  handleSubmit: function (e) {
    e.preventDefault()
    this.props.addUser(this.state.name)
  },

  render () {
    return (
      <div className='add-user-form'>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label>Name:</label>
            <input type='text' onChange={this.handleNameField}></input>
            <button type='button'
              onClick={() => {this.props.addUser(this.state.name)}}>
              Add User
            </button>
          </span>
        </form>
      </div>
    )
  }
})
