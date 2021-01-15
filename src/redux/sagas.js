import { call, put, takeEvery, select } from 'redux-saga/effects'
import { FETCH_ClIENTS, REQUEST_ClIENTS, REQUEST_DECLARANTS, FETCH_DECLARANTS } from './types'
import {getClientState} from '../redux/reducers/rootReducer'

const data = {
  access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDk5MzM1ODMsImV4cCI6MTYxMjUyNTU4Mywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImJ5Lmhhc2tlbGwifQ.oa-YaDO-4UKGP9Z_IjIQRQfKQ6cgRrpNLSr71Si0YKhFUOAVGqQWmQgHkKj8PLBtdCBKr5ERNcoBagvw7C8QkdLd3Ruoks2VxOd7DDkj6WnAEqeEcc9WVOpEjFuIOWXVRDhwK1KtwwOd9jjd5I93EY8SNi5zvf6AV0oOJ4xETIoOWFuYLT0-KxgJYn8JPwErAQNpHyaLVBTHRB0dNk8NF7C3imKGzHxDX5zijpV5HwX1PSg8AT0DVSSu568B7DqLuQlFVcwRJme3JfpeaJP9YbYZTxyMMvIP3Pi4PqmEendySc8DAzCWWSYytfqvpTleqRIFgEEkG1nRU4Muu42bPYGLW5VnHIGiR3wgWc0rlkfae9pIXFrhEGvkD3eOyvTGnvD3YjAXsTQU2M_0PA6HP2i96eTnZO5noT3jnFWl3VYvqNLLpdeVgqNAFMmS8h9dLoDdux9mVh8q86Yg8mG4tk99ZCyVVdsYuUsVCwPneVjBXUxDfvqFpj-ItJx_hSZAydOhXvkFPdu4vgrHfWY6FMM0W-fFyHxV2gkiah5NMvYMAW1JlXSDIm2ZO64kF4kIvN3heFp17NWXxPhMDkrtrjDsWypHVhvw2ROljLCuiEoT7nOIvbsIek3eTqLmnRj3AyLmHSHxZPu0-W182m3Q8RJzhzj3aJe6RIAHRAxSCgs",
	token_type: "Bearer"
}
let currentClient;

export function* mySaga() {
  yield takeEvery(REQUEST_ClIENTS, clientsWorker);
  yield takeEvery(REQUEST_DECLARANTS, declarantsWorker);
}

function* clientsWorker() {
  const payload = yield call(fetchClients)
  yield put({ type: FETCH_ClIENTS, payload })
}

async function fetchClients() {
  const responce = await fetch('http://lexberry.com.ua/api/v1/clients', {
    method: 'GET',
    headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
		}
  })
  const clientsItems = await responce.json()
  return clientsItems.items
}


function* declarantsWorker() {
  currentClient = yield select(getClientState);
  yield call(fetchDeclarants)
  const payload = yield call(fetchDeclarants)
  yield put({ type: FETCH_DECLARANTS, payload })
}

async function fetchDeclarants() {
  const responce = await fetch(` http://lexberry.com.ua/api/v1/applicants?filter[client:id]=${currentClient.id}`, {
    method: 'GET',
    headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
		}
  })
  const clientsItems = await responce.json()
  return clientsItems.items
}