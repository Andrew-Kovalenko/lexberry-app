import { FETCH_ClIENTS, SET_CURRENT_ClIENT } from '../types'

const initialState = {
  clients: [],
  client: null
}

export const clientsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ClIENTS:
      return {...state, clients: action.payload}
    case SET_CURRENT_ClIENT:
      return {...state, client: action.payload}
    default: return state
  }
}