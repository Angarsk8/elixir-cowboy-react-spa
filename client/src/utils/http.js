import fetch from 'isomorphic-fetch'
import 'es6-promise'

const { scheme, hostname } =
  process.env.NODE_ENV === 'production'
    ? { scheme: 'https'
      , hostname: window.location.hostname }
    : { scheme: 'http'
      , hostname: '192.168.0.7:8080' }

function buildHeaders(options = {}) {
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return new Headers({
    ...defaultHeaders,
    ...options
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const apiURL = `${scheme}://${hostname}/api/v1`

export async function httpGet(url) {
  const response = await fetch(url, {
    headers: buildHeaders()
  })

  return checkStatus(response).json()
}

window.httpGet = httpGet

export async function httpPost(url, data) {
  const body = JSON.stringify(data)
  const response = await fetch(url, {
    method: 'POST',
    headers: buildHeaders(),
    body: body
  })

  return checkStatus(response).json()
}

export async function httpDelete(url) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: buildHeaders()
  })

  return checkStatus(response).json()
}

export async function httpUpdate(url, data) {
  const body = JSON.stringify(data)
  const response = await fetch(url, {
    method: 'PUT',
    headers: buildHeaders(),
    body: body
  })

  return checkStatus(response).json()
}
