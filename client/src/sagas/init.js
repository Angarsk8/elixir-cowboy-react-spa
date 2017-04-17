import { put, call } from 'redux-saga/effects'
import {
  getAuthToken,
  setAuthToken,
  removeAuthToken
} from '../utils/http'
import {
  appActions,
  userActions,
  todosActions
} from '../actions'
import { userApi, todosApi, commentsApi } from '../api'

function* createWelcomeTodos() {
  const todos = [
    {
      title: 'Made with ❤️ by @Angarsk8!',
      description: 'This is an MIT licensed OS project, feel free to use and abuse of this code. This project was built from scratch with:',
      comments: [
        {text: 'Elixir 💜'},
        {text: 'Cowboy 1.1'},
        {text: 'PostgreSQL'},
        {text: 'React ⚛️'},
        {text: 'Redux ♻️'},
        {text: 'Redux Saga'}
      ],
      select: true
    },
    {
      title: 'Click me 🔓 I\'m editable! ✍',
      description: 'You can edit me as well, to save my content just click somewhere else.',
      comments: [
        {text: 'You can edit and delete comments'},
        {text: 'To edit a comment click over it'}
      ]
    },
    {
      title: 'Welcome to the app ✌️',
      description: 'I\'m glad that you opened the link! Feel free to use this demo app 👍.'
    }
  ]

  yield _createTodos(todos)
}

function* _createTodos(todos) {
  for (let i = todos.length - 1; i >= 0; i--) {
    yield _createTodo(todos[i])
  }
}

function* _createTodo({ title, description, comments = [], select = false }) {
  const payload = { title, description }
  const response = yield call(todosApi.createTodo, {todo: payload})
  const todo = response.data
  yield put(todosActions.setTodo(todo))
  yield _createComments(todo.id, comments)
  if (select) {
    yield put(todosActions.selectTodo(todo.id))
  }
}

function* _createComments(todoId, comments) {
  for (let i = comments.length - 1; i >= 0; i--) {
    yield call(commentsApi.createComment, {
      todoId,
      comment: comments[i]
    })
  }
}

function* initialSetup() {
  try {
    yield put(appActions.initializeAppRequest())
    const token = yield call(getAuthToken)
    if (token) {
      const response = yield call(userApi.getCurrentUser)
      yield put(userActions.setCurrentUser(response.data.user))
      yield put(todosActions.fetchTodosRequest())
    } else {
      const response = yield call(userApi.createUser)
      const { jwt, user } = response.data
      yield call(setAuthToken, jwt)
      yield put(userActions.setUser(user))
      yield createWelcomeTodos()
    }
    yield put(appActions.initializeApp())
  } catch (e) {
    yield put(appActions.initializeAppFailure())
    yield call(removeAuthToken)
    console.error(`Initial setup failed: ${e.message}`)
  }
}

export default initialSetup
