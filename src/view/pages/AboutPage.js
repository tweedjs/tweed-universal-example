import { Node } from 'tweed'
import Layout from '../Layout'

/**
 * @see src/view/pages/HomePage.js
 */
export default class AboutPage {
  title = 'About'

  constructor (layout) {
    this.layout = layout
  }

  static load (router) {
    return new AboutPage(
      new Layout(router)
    )
  }

  render () {
    return this.layout.render(
      <div>
        <h1>About</h1>
        <p>
          This is an about page!
        </p>
      </div>
    )
  }
}
