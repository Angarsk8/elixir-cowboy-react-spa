import {
  apiURL,
  httpGet,
  httpPost,
  httpUpdate,
  httpDelete
} from '../utils/http'

export function getTodos() {
  return httpGet(`${apiURL}/todos`)
}

export function createTodo({ todo }) {
  return httpPost(`${apiURL}/todos`, todo)
}

export function updateTodo({ id, changes }) {
  return httpUpdate(`${apiURL}/todos/${id}`, changes)
}

export function deleteTodo({ id }) {
  return httpDelete(`${apiURL}/todos/${id}`)
}
