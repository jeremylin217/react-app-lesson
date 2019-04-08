import { createAction } from 'redux-actions'
import {
  GET_USERS_REQUEST,
  GET_USERS_RECEIVE,
  GET_USERS_FAILURE,
} from '@/constants/actionTypes'

export const getUsersRequest = createAction(GET_USERS_REQUEST)
export const getUsersReceive = createAction(GET_USERS_RECEIVE)
export const getUsersFailure = createAction(GET_USERS_FAILURE)
