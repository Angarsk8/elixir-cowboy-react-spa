import { httpGet, apiURL } from '../utils/http'

export function getTodos() {
  return httpGet(`${apiURL}/todos`)
}
