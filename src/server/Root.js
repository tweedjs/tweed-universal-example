import { Node } from 'tweed'

/**
 * This component is the equivalent of the Root
 * component from the client script, but since
 * we are on the server side, we need to provide
 * the full HTML document.
 *
 * @see src/client/Root.js
 */
export default class Root {
  constructor (router) {
    this.router = router
  }

  render () {
    return (
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <title>{this.router.current.title}</title>

          <link rel='stylesheet' href='/style.css' />
          <script defer src='/main.bundle.js' />
        </head>
        <body>
          {/* This is the part that gets recreated by the client Root */}
          <div id='app'>
            {this.router}
          </div>
        </body>
      </html>
    )
  }
}
