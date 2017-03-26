import {
  apiURL,
  httpGet,
  httpPost
} from '../utils/http'

export default {
  getCurrentUser,
  createUser
}

export function getCurrentUser() {
  return httpGet(`${apiURL}/current_user`)
}

export function createUser() {
  return httpPost(`${apiURL}/registrations`)
}
