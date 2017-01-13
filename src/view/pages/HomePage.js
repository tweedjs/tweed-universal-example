import { Node } from 'tweed'
import Layout from '../Layout'

/**
 * This is the home page, bound to the root URI ('/').
 */
export default class HomePage {
  /**
   * Any objects that the router receives in its route
   * handlers will be checked for a `title` property,
   * which will then handle setting the title of the
   * document. This is also reused in the server's
   * Root component.
   *
   * @see src/server/Root.js
   */
  title = 'Home'

  constructor (layout) {
    this.layout = layout
  }

  /**
   * If the return value of route handler callbacks have
   * a function called `load`, it will be run with the
   * router instance passed as an argument. This instance
   * can be used for creating links and more.
   *
   * @param {Router} router
   *
   * @return {Page}
   */
  static load (router) {
    return new HomePage(
      new Layout(router)
    )
  }

  render () {
    return this.layout.render(
      <div>
        <h1>Universal Tweed App</h1>
        <p>
          This is an example of a Tweed app with server side initial rendering.
          A combination of the {this._tweedRouterLink}, {this._webpackLink},
          and {this._importLink} enables every page to be split into separate
          scripts, and loaded only when they're needed.
        </p>
        <p>
          In the menu above, there are some links to pages. Open up your dev
          tools and play around!
        </p>
      </div>
    )
  }

  _tweedRouterLink = (
    <a href='https://github.com/tweedjs/tweed-router' target='__blank'>
      Tweed Router
    </a>
  )

  _webpackLink = (
    <a href='https://webpack.github.io' target='__blank'>
      Webpack
    </a>
  )

  _importLink = (
    <a href='https://github.com/tc39/proposal-dynamic-import' target='__blank'>
      Dynamic Imports
    </a>
  )
}
