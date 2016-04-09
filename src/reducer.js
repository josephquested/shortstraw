import clone from 'clone'

export default (state = {users: [], tasks: []}, action) => {
  let newState = clone(state)

  switch (action.type) {
    case 'ADD USER':
      newState.users.push(action.user)
      return newState

    case 'DELETE USER':
      newState.users.splice(action.index, 1)
      return newState

    default:
      return state
  }
}
