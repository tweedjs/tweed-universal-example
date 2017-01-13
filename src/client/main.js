import 'babel-polyfill'
import render from 'tweed/render/dom'
import BrowserRouter from 'tweed-router/browser'
import routes from '../routes'
import Root from './Root'

// This will create the router, navigate to the route
// matching the current URL, and resolve the promise
// with the router.
BrowserRouter.make(routes).then((router) => {
  // The Root component needs a Router to be able to
  // generate links and such.
  const root = new Root(router)

  // Finally, mount the UI on top of the HTML returned
  // from the server.
  render(root, document.querySelector('#app'))
})
