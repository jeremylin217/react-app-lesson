import { handleActions } from 'redux-actions'

const initState = []

export default handleActions(
  {
    GET_USERS_REQUEST(state, action) {
      return initState
    },
    GET_USERS_RECEIVE(state, action) {
      return action.payload.users
    },
  },
  initState
)
