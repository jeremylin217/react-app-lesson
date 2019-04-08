import { combineEpics } from 'redux-observable'
import { getUsers, getUser } from './users'

export default combineEpics(getUsers, getUser)
