import 'babel-polyfill'
import './requireEnsure'
import express from 'express'
import bootstrap from './bootstrap'

const app = express()

bootstrap(app)
