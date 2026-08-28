// Package Imports
const app = require('express')

// Server Setup
const server = app()
const PORT = 2000
const HOSTNAME ='0.0.0.0'
server.listen(2000,'0.0.0.0', () => {
  console.log (`Server is running in ${HOSTNAME}:${PORT}`)
})