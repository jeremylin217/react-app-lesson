import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, switchMap, catchError } from 'rxjs/operators'
import { GET_USERS_REQUEST, GET_USER_REQUEST } from '@/constants/actionTypes'
import { getUsersReceive, getUsersFailure } from '@/actions/users'
import { getUserReceive, getUserFailure } from '@/actions/user'

export const getUsers = action$ =>
  action$.pipe(
    ofType(GET_USERS_REQUEST),
    switchMap(action =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/users`).pipe(
        map(users => getUsersReceive({ users })),
        catchError(error => of(getUsersFailure(error)))
      )
    )
  )

export const getUser = action$ =>
  action$.pipe(
    ofType(GET_USER_REQUEST),
    map(action => action.payload.id),
    switchMap(id =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/users/abc`).pipe(
        map(user => getUserReceive({ user })),
        catchError(error => of(getUserFailure(error)))
      )
    )
  )
