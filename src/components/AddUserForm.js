import React from 'react'

export default React.createClass({
  getInitialState: function () {
    return {
      name: ''
    }
  },

  handleNameField: function (e) {
    this.setState({
      name: e.target.value
    })
  },

  handleSubmit: function (e) {
    e.preventDefault()
    this.props.addUser(this.state.name)
    this.setState({name: ''})
  },

  render () {
    return (
      <div className='add-user-form'>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label>Name:</label>
            <input
              type='text'
              onChange={this.handleNameField}
              value={this.state.name}>
            </input>
            <button type='button'
              onClick={this.handleSubmit}>
              Add User
            </button>
          </span>
        </form>
      </div>
    )
  }
})
