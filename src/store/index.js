import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import nothing from '@/middlewares/nothing'
import createRootReducer from '@/reducers'

export const history = createBrowserHistory()

const initialState = {}
const appRouterMiddleware = routerMiddleware(history)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers =
  process.env.NODE_ENV === 'development'
    ? [appRouterMiddleware, logger, nothing]
    : [appRouterMiddleware]

export const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancer(applyMiddleware(...enhancers))
)
