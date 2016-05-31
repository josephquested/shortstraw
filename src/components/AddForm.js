import React from 'react'

export default class AddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
    this.handleNameField = this.handleNameField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameField (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({name: ''})
  }

  render () {
    return (
      <div className='add-form'>
        <form onSubmit={this.handleSubmit}>
          <span>
            <label>{this.props.type} Name:</label>
            <input
              className='add-form-input'
              type='text'
              onChange={this.handleNameField}
              value={this.state.name}>
            </input>
            <button
              onClick={this.handleSubmit}>
              Add
            </button>
          </span>
        </form>
      </div>
    )
  }
}
