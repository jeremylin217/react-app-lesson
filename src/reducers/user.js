import { handleActions } from 'redux-actions'

const initState = {
  id: null,
  username: '',
  name: 'Jeremy',
  email: '',
}

export default handleActions(
  {
    GET_USER_REQUEST(state, action) {
      return initState
    },
    GET_USER_RECEIVE(state, action) {
      return action.payload.user
    },
  },
  initState
)
