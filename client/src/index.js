import React from 'react'
import { render } from 'react-dom'

import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import 'normalize.css/normalize.css'
import './styles/main.css'
import './utils/polyfills'

import Root from './components/Root'

render(
  <Root />,
  document.getElementById('root')
)
