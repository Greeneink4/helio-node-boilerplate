/*
  Add your logic here to initialize a service of your choice
 */

 import express from 'express'

 const app = express()

 app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)

export default true