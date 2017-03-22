import { combineReducers } from 'redux'
import todos, * as todosSelectors from './todos'

const rootReducer = combineReducers({
  todos
})

export default rootReducer

export function getAllTodos({ todos }) {
  return todosSelectors.getAllTodos(todos)
}
