export const createLoadingSelector = actions => state =>
  actions.some(action => state.loading[action])

const loadingReducer = (state = {}, action) => {
  const { type } = action
  const matches = /(.*)_(REQUEST|RECEIVE|FAILURE)/.exec(type)

  // not a *_REQUEST / *_SUCCESS / *_FAILURE actions, so we ignore them
  if (!matches) return state

  const [, requestName, requestState] = matches
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_RECEIVE / GET_TODOS_FAILURE
    [requestName]: requestState === 'REQUEST',
  }
}

export default loadingReducer
