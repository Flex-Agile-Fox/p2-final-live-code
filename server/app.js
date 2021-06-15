require('dotenv').config()
const express = require('express')
const port = 3000
const router = require('./routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
  console.log(`run: ${port}`)
})
