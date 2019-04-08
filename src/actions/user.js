import { createAction } from 'redux-actions'
import {
  GET_USER_REQUEST,
  GET_USER_RECEIVE,
  GET_USER_FAILURE,
} from '@/constants/actionTypes'

export const getUserRequest = createAction(GET_USER_REQUEST)
export const getUserReceive = createAction(GET_USER_RECEIVE)
export const getUserFailure = createAction(GET_USER_FAILURE)
