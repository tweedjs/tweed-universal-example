import { Node } from 'tweed'

export default class Header {
  constructor (menu) {
    this.menu = menu
  }

  render () {
    return (
      <header>
        {this.menu}
      </header>
    )
  }
}
