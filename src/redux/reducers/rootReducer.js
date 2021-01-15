import {combineReducers} from 'redux'
import {clientsReducer} from './clientsReducer'
import {declarantsReducer} from './declarantsReducer'

export const rootReducer = combineReducers({
  clients: clientsReducer,
  declarants: declarantsReducer
})

export const getClientState = (state) => state.clients.client