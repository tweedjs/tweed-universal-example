import { Node } from 'tweed'

/**
 * Since the root element in the DOM will
 * be replaced we can "add back" the #app
 * element for consistency.
 *
 * @see src/server/Root.js
 */
export default class Root {
  constructor (router) {
    this.router = router
  }

  render () {
    return (
      <div id='app'>
        {this.router}
      </div>
    )
  }
}
