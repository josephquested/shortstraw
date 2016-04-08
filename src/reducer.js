import clone from 'clone'

export default (state = {users: [], tasks: []}, action) => {
  switch (action.type) {

    case 'ADD USER':
      let newState = clone(state)
      newState.users.push(action.user)
      return newState

    default:
      return state
  }
}
