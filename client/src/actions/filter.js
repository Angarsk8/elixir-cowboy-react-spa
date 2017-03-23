import { SET_FILTER } from '../constants'

export default {
  setFilter
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: {
      filter
    }
  }
}
