import todosWatchers from './todos'
import commentsWatchers from './comments'

function runWatchers(watchers) {
  return Object
    .values(watchers)
    .map(watcher => watcher())
}

export default function* rootSaga() {
  yield [
    ...runWatchers(todosWatchers),
    ...runWatchers(commentsWatchers)
  ]
}
