import { REQUEST_ClIENTS, SET_CURRENT_ClIENT, REQUEST_DECLARANTS, UPDATE_CURRENT_NEW_DECLARANT, PUSH_NEW_DECLARANT, UPDATE_NEW_DECLARANTS_ARRAY } from "./types"

export function getClients() {
  return {
    type: REQUEST_ClIENTS
  }
}

export function setCurrentClient(client) {
  return {
    type: SET_CURRENT_ClIENT,
    payload: client
  }
}

export function getDeclarants() {
  return {
    type: REQUEST_DECLARANTS
  }
}

export function updateNewCurrentDeclarant(declarant) {
  return {
    type: UPDATE_CURRENT_NEW_DECLARANT,
    payload: declarant
  }
}

export function pushNewDeclarant(declarant) {
  return {
    type: PUSH_NEW_DECLARANT,
    payload: declarant
  }
}

export function updateNewDeclarantsArray(declarant) {
  return {
    type: UPDATE_NEW_DECLARANTS_ARRAY,
    payload: declarant
  }
}