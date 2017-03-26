import { userTypes } from '../constants'

export default {
  createUserRequest,
  setUser,
  createUserFailure,
  fetchUserRequest,
  setCurrentUser,
  fetchUserFailure
}

export function createUserRequest() {
  return {
    type: userTypes.CREATE_USER_REQUEST
  }
}

export function setUser(user) {
  return {
    type: userTypes.CREATE_USER_SUCCESS,
    payload: {
      user
    }
  }
}

export function createUserFailure() {
  return {
    type: userTypes.CREATE_USER_FAILURE
  }
}

export function fetchUserRequest() {
  return {
    type: userTypes.FETCH_USER_REQUEST
  }
}

export function setCurrentUser(user) {
  return {
    type: userTypes.FETCH_USER_SUCCESS,
    payload: {
      user
    }
  }
}

export function fetchUserFailure() {
  return {
    type: userTypes.FETCH_USER_FAILURE
  }
}
