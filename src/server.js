import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

setupMiddware(app)
connect()
// setup basic routing for index route

// mount the restRouter on the /api path
app.use('/api', restRouter)

app.use('/signin', signin)

// catch all
app.all('*', (req, res) => {
  res.json({ ok: true })
})

export default app
