import 'babel-polyfill'
import render from 'tweed/render/dom'
import BrowserRouter from 'tweed-router/browser'
import routes from '../routes'
import Root from './Root'

BrowserRouter.make(routes)
  .then((router) =>
    render(new Root(router), document.querySelector('#app'))
  )
