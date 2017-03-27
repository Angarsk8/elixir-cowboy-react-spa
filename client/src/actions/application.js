import { appTypes } from '../constants'

export default {
  initializeAppRequest,
  initializeApp,
  initializeAppFailure
}

export function initializeAppRequest(filter) {
  return {
    type: appTypes.INITIALIZE_APP_REQUEST
  }
}

export function initializeApp(filter) {
  return {
    type: appTypes.INITIALIZE_APP_SUCCESS
  }
}

export function initializeAppFailure(filter) {
  return {
    type: appTypes.INITIALIZE_APP_FAILURE
  }
}
