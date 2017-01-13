import render from 'tweed/render/string'
import Root from './Root'
import { Router } from 'tweed-router'
import routes from '../routes'

/**
 * @param {Express} app
 */
export default function bootstrap (app) {
  // First, we register all the different paths from
  // the routes file as simple GET routes in Express.
  for (const route in routes) {
    app.get(route, handle)
  }

  // Then we start the server.
  app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
  })
}

async function handle (req, res) {
  // First, we create the router
  const router = new Router(routes)

  try {
    // Then we navigate to the route that
    // matches the URL. Here's where things
    // can go wrong, since it will run the
    // `load` methods.
    await router.navigate(req.url)

    // If the navigation went fine, we create
    // a Root component.
    //
    // @see src/server/Root
    const root = new Root(router)

    // We use the StringRenderer to get HTML
    // as a string back from the UI structure.
    render(root, (html) => {
      // If we prepend the doctype, we have a complete
      // HTML document that we can send to the client.
      res.send(String('<!DOCTYPE html>' + html))
    })
  } catch (e) {
    // If anything goes wrong, we output an error.
    console.error(e.stack)
    res.status(500).send(e.message)
  }
}
