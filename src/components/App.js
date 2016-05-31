import React from 'react'
import UserList from './UserList'
import TaskList from './TaskList'
import AddForm from './AddForm'
import Modal from 'react-modal'
import UserModal from './UserModal'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalIsOpen: false, activeUser: { name: undefined } }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  openModal (user) {
    this.setState({ modalIsOpen: true, activeUser: user })
  }

  afterOpenModal () {
  }

  closeModal () {
    this.setState({ modalIsOpen: false, activeUser: { name: 'null' } })
  }

  addUser (name) {
    if (name === '') return
    this.props.store.dispatch({
      type: 'ADD USER',
      state: this.props.appState,
      name: name
    })
  }

  deleteUser (index) {
    this.props.store.dispatch({
      type: 'DELETE USER',
      state: this.props.appState,
      index: index
    })
  }

  addTask (name) {
    if (name === '') return
    this.props.store.dispatch({
      type: 'ADD TASK',
      state: this.props.appState,
      name: name
    })
  }

  deleteTask (index) {
    this.props.store.dispatch({
      type: 'DELETE TASK',
      state: this.props.appState,
      index: index
    })
  }

  render () {
    return (
      <div className='app'>
        <h1>shortstraw</h1>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={Modal.defaultStyles}>
          <UserModal closeModal={this.closeModal} user={this.state.activeUser}/>
        </Modal>

        <UserList
          users={this.props.appState.users}
          deleteUser={this.deleteUser}
          openModal={this.openModal}
        />
        <AddForm addItem={this.addUser} type='User' />
        <TaskList
          tasks={this.props.appState.tasks}
          deleteTask={this.deleteTask}
        />
        <AddForm addItem={this.addTask} type='Task'/>
      </div>
    )
  }
}
