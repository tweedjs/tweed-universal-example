import { Node } from 'tweed'

export default class Menu {
  links = {
    '/': 'Home',
    '/about': 'About',
    '/slow': 'A page that takes time to load'
  }

  constructor (router) {
    this.router = router

    this._item = this._item.bind(this)
  }

  render () {
    return (
      <nav className='Menu__wrapper' role='navigation'>
        <ul className='Menu'>
          {Object.keys(this.links).map(this._item)}
        </ul>
      </nav>
    )
  }

  _item (path) {
    const attributes = {
      class: {
        'Menu__item': true,
        'Menu__item--active': this.router.isActive(path)
      }
    }

    return (
      <li>
        {this.router.link(path, this.links[path], attributes)}
      </li>
    )
  }
}
