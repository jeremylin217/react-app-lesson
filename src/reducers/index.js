import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import app from './app'
import user from './user'

export default history =>
  combineReducers({
    router: connectRouter(history),
    app,
    user,
  })
