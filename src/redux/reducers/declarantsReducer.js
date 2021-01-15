import { FETCH_DECLARANTS, PUSH_NEW_DECLARANT, UPDATE_CURRENT_NEW_DECLARANT, UPDATE_NEW_DECLARANTS_ARRAY } from '../types'

const initialState = {
  declarants: [],
  newDeclarants: [],
  currentNewDerclarant: {}
}

export const declarantsReducer = (state = initialState, action) => {
  switch(action.type) {             
    case FETCH_DECLARANTS:
      return {...state, declarants: action.payload}
    case PUSH_NEW_DECLARANT:
      return {...state, declarants: state.declarants.concat([action.payload])}
    case UPDATE_NEW_DECLARANTS_ARRAY:
      return {...state, newDeclarants: state.newDeclarants.concat([action.payload])}
    case UPDATE_CURRENT_NEW_DECLARANT:
      return {...state, currentNewDerclarant: action.payload}
    default: return state
  }
}