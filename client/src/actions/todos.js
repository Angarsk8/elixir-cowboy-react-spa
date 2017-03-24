import { todosTypes } from '../constants'

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
    type: todosTypes.FETCH_TODOS_REQUEST
  }
}

export function setTodos(todos) {
  return {
    type: todosTypes.FETCH_TODOS_SUCCESS,
    payload: {
      todos
    }
  }
}

export function fetchTodosFailure() {
  return {
    type: todosTypes.FETCH_TODOS_FAILURE
  }
}

export function createTodoRequest(todo) {
  return {
    type: todosTypes.CREATE_TODO_REQUEST,
    payload: {
      todo
    }
  }
}

export function setTodo(todo) {
  return {
    type: todosTypes.CREATE_TODO_SUCCESS,
    payload: {
      todo
    }
  }
}

export function createTodoFailure() {
  return {
    type: todosTypes.CREATE_TODO_FAILURE
  }
}

export function updateTodoRequest(id, changes) {
  return {
    type: todosTypes.UPDATE_TODO_REQUEST,
    payload: {
      id,
      changes
    }
  }
}

export function updateTodo(todo) {
  return {
    type: todosTypes.UPDATE_TODO_SUCCESS,
    payload: {
      todo
    }
  }
}

export function updateTodoFailure() {
  return {
    type: todosTypes.UPDATE_TODO_FAILURE
  }
}

export function deleteTodoRequest(id) {
  return {
    type: todosTypes.DELETE_TODO_REQUEST,
    payload: {
      id
    }
  }
}

export function deleteTodo(id) {
  return {
    type: todosTypes.DELETE_TODO_SUCCESS,
    payload: {
      id
    }
  }
}

export function deleteTodoFailure() {
  return {
    type: todosTypes.DELETE_TODO_FAILURE
  }
}

export function selectTodo(id) {
  return {
    type: todosTypes.SELECT_TODO,
    payload: {
      id
    }
  }
}

export function toggleAllTodos(ids, completed) {
  return {
    type: todosTypes.TOGGLE_ALL_TODOS,
    payload: {
      ids,
      completed
    }
  }
}

export function deleteAllTodosRequest(ids) {
  return {
    type: todosTypes.DELETE_ALL_TODOS_REQUEST,
    payload: {
      ids
    }
  }
}

export function deleteAllTodos() {
  return {
    type: todosTypes.DELETE_ALL_TODOS_SUCCESS
  }
}
