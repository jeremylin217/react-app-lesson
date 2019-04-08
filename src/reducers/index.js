import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import app from './app'
import users from './users'
import user from './user'
import loading from './loading'
import error from './error'

export default history =>
  combineReducers({
    router: connectRouter(history),
    loading,
    error,
    app,
    users,
    user,
  })
