import todosWatchers from './todos'
import commentsWatchers from './comments'
import initialSetup from './init'

function runWatchers(watchers) {
  return Object
    .values(watchers)
    .map(watcher => watcher())
}

export default function* rootSaga() {
  yield [
    initialSetup(),
    ...runWatchers(todosWatchers),
    ...runWatchers(commentsWatchers)
  ]
}
