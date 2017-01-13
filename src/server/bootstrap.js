import render from 'tweed/render/string'
import Root from './Root'
import { Router } from 'tweed-router'
import routes from '../routes'
import express from 'express'

export default function bootstrap (app) {
  app.use(express.static('public'))

  for (const route in routes) {
    app.get(route, handle)
  }

  app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
  })
}

async function handle (req, res) {
  const router = new Router(routes)

  await router.navigate(req.url)

  render(new Root(router), (html) => {
    res.send(String('<!DOCTYPE html>' + html))
  })
}
