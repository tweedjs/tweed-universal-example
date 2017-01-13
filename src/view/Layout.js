import { Node } from 'tweed'
import Menu from './Menu'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'

/**
 * With Tweed you're free to arrange your code
 * however you want. Here we chose to hold most
 * of the main layout in a class, which composes
 * the main components and outputs whatever is
 * passed into `render` in between.
 */
export default class Layout {
  constructor (router) {
    this.router = router
    this.container = new Container()
    this.header = new Header(
      new Menu(router)
    )
    this.footer = new Footer()
  }

  render (content) {
    return this.container.render(
      <div className='Layout' class-Layout--isLoading={this.router.isLoading}>
        {this.header}
        {content}
        {this.footer}
      </div>
    )
  }
}
