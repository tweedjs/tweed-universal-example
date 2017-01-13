import { Node } from 'tweed'

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
