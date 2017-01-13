import 'babel-polyfill'
import './requireEnsure' // ← Check this file out!
import express from 'express'
import bootstrap from './bootstrap'

// In this example we use Express for
// a simple back end.
const app = express()

// First of all we need to check for any
// static files in the `public` directory.
app.use(express.static('public'))

// Finally, we delegate to the bootstrap
// script. This is mainly because we want
// to use an async function, for which we
// need the Babel polyfill to kick in.
//
// Not perfect, but whatever ¯\_(ツ)_/¯
bootstrap(app)
