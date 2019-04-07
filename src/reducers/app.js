import { handleActions } from 'redux-actions'

const initState = {
  count: 0,
}

export default handleActions(
  {
    APP_CLICK(state, action) {
      return {
        ...state,
        count: state.count + 1,
      }
    },
  },
  initState
)
