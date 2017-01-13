import { Node } from 'tweed'
import Layout from '../Layout'

/**
 * This page simulates a slow loading process.
 * The static `load` method will be called both
 * on the server and the browser.
 */
export default class LoadingPage {
  title = 'Phew!'

  constructor (layout) {
    this.layout = layout
  }

  static async load (router) {
    // Replace this with an API call or something!
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return new LoadingPage(
      new Layout(router)
    )
  }

  render () {
    return this.layout.render(
      <div>
        <h1>Phew!</h1>
        <p>
          This page was delayed by a silly <code>setTimeout</code> to
          demonstrate the loading state. In reality you might call some
          API or something.
        </p>
        <p>
          You can also try throttling the network to see how the site
          performs on limited networks. Pay attention to the code splitting
          and how it affects the performance.
        </p>
      </div>
    )
  }
}
