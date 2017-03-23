import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  SELECT_TODO,
  TOGGLE_ALL_TODOS,
  DELETE_ALL_TODOS_REQUEST,
  DELETE_ALL_TODOS_SUCCESS
} from '../constants'

export default {
  fetchTodosRequest,
  setTodos,
  fetchTodosFailure,
  createTodoRequest,
  setTodo,
  createTodoFailure,
  updateTodoRequest,
  updateTodo,
  updateTodoFailure,
  deleteTodoRequest,
  deleteTodo,
  deleteTodoFailure,
  selectTodo,
  toggleAllTodos,
  deleteAllTodos
}

export function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

export function setTodos(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: {
      todos
    }
  }
}

export function fetchTodosFailure() {
  return {
    type: FETCH_TODOS_FAILURE
  }
}

export function createTodoRequest(todo) {
  return {
    type: CREATE_TODO_REQUEST,
    payload: {
      todo
    }
  }
}

export function setTodo(todo) {
  return {
    type: CREATE_TODO_SUCCESS,
    payload: {
      todo
    }
  }
}

export function createTodoFailure() {
  return {
    type: CREATE_TODO_FAILURE
  }
}

export function updateTodoRequest(id, changes) {
  return {
    type: UPDATE_TODO_REQUEST,
    payload: {
      id,
      changes
    }
  }
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: {
      todo
    }
  }
}

export function updateTodoFailure() {
  return {
    type: UPDATE_TODO_FAILURE
  }
}

export function deleteTodoRequest(id) {
  return {
    type: DELETE_TODO_REQUEST,
    payload: {
      id
    }
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteTodoFailure() {
  return {
    type: DELETE_TODO_FAILURE
  }
}

export function selectTodo(id) {
  return {
    type: SELECT_TODO,
    payload: {
      id
    }
  }
}

export function toggleAllTodos(ids, completed) {
  return {
    type: TOGGLE_ALL_TODOS,
    payload: {
      ids,
      completed
    }
  }
}

export function deleteAllTodosRequest(ids) {
  return {
    type: DELETE_ALL_TODOS_REQUEST,
    payload: {
      ids
    }
  }
}

export function deleteAllTodos() {
  return {
    type: DELETE_ALL_TODOS_SUCCESS
  }
}
