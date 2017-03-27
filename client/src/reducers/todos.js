import { combineReducers } from 'redux'
import { todosTypes } from '../constants'
import { putProcessingStatus } from './helpers'

function isFetching(state = false, action) {
  switch (action.type) {
    case todosTypes.FETCH_TODOS_REQUEST:
      return true
    case todosTypes.FETCH_TODOS_SUCCESS:
    case todosTypes.FETCH_TODOS_FAILURE:
      return false
    default:
      return state
  }
}

function isCreating(state = false, action) {
  switch (action.type) {
    case todosTypes.CREATE_TODO_REQUEST:
      return true
    case todosTypes.CREATE_TODO_SUCCESS:
    case todosTypes.CREATE_TODO_FAILURE:
      return false
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case todosTypes.FETCH_TODOS_SUCCESS:
    case todosTypes.TOGGLE_ALL_TODOS_SUCCESS:
      return action.payload.todos
    case todosTypes.UPDATE_TODO_SUCCESS:
      const { todo } = action.payload
      return state.map(_todo => {
        if (_todo.id === todo.id) {
          return todo
        }
        return _todo
      })
    case todosTypes.DELETE_TODO_SUCCESS:
      return state.filter(todo =>
        todo.id !== action.payload.id
      )
    case todosTypes.CREATE_TODO_SUCCESS:
      return [action.payload.todo, ...state]
    case todosTypes.DELETE_ALL_TODOS_SUCCESS:
      return []
    default:
      return state
  }
}

function updating(state = [], action) {
  switch (action.type) {
    case todosTypes.TOGGLE_ALL_TODOS_REQUEST:
      return action.payload.ids
    case todosTypes.TOGGLE_ALL_TODOS_SUCCESS:
    case todosTypes.TOGGLE_ALL_TODOS_FAILURE:
      return []
    case todosTypes.UPDATE_TODO_REQUEST:
      return [...state, action.payload.id]
    case todosTypes.UPDATE_TODO_SUCCESS:
      return state.filter(id => id !== action.payload.todo.id)
    case todosTypes.UPDATE_TODO_FAILURE:
      return state.filter(id => id !== action.payload.id)
    default:
      return state
  }
}

function deleting(state = [], action) {
  switch (action.type) {
    case todosTypes.DELETE_ALL_TODOS_REQUEST:
      return action.payload.ids
    case todosTypes.DELETE_ALL_TODOS_SUCCESS:
    case todosTypes.DELETE_ALL_TODOS_FAILURE:
      return []
    case todosTypes.DELETE_TODO_REQUEST:
      return [...state, action.payload.id]
    case todosTypes.DELETE_TODO_SUCCESS:
    case todosTypes.DELETE_TODO_FAILURE:
      return state.filter(id => id !== action.payload.id)
    default:
      return state
  }
}

function selectedTodoId(state = 0, action) {
  switch (action.type) {
    case todosTypes.SELECT_TODO:
      return action.payload.id
    case todosTypes.DELETE_TODO_SUCCESS:
      return state === action.payload.id ? 0 : state
    case todosTypes.DELETE_ALL_TODOS_SUCCESS:
      return 0
    default:
      return state
  }
}

export default combineReducers({
  todos,
  isFetching,
  isCreating,
  updating,
  deleting,
  selectedTodoId
})

export function getAllTodos({ todos, updating, deleting }, { filter }) {
  const filteredTodos = filterTodos(todos, filter)
  return putProcessingStatus(filteredTodos, updating, deleting)
}

export function getAllTodosIds({ todos }) {
  return todos.map(todo => todo.id)
}

export function getFetchingStatus({ isFetching }) {
  return isFetching
}

export function getCreatingStatus({ isCreating }) {
  return isCreating
}

export function getSelectedTodoId({ selectedTodoId }) {
  return selectedTodoId
}

export function getSelectedTodo({ todos, selectedTodoId }) {
  return todos.find(todo => todo.id === selectedTodoId)
}

export function getMarkedStatus({ todos }) {
  return todos.every(todo => todo.completed)
}

/*  PRIVATE HELPER FUNCTIONS */

function filterTodos(todos, filter) {
  switch (filter) {
    case 'COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}
