const express = require('express')
const path = require('path')
const chalk = require('chalk')
const config = require('./config')
const app = express()
app.use(express.static(path.join(__dirname,'../src')))
app.use(express.static(path.join(__dirname,'../node_modules')))
const port = config.port
app.listen(port)

console.log(chalk.yellow(`now server is on [${port}]`))
