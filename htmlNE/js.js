const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/registro.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'registro.html'))
  })

  app.get('/sobrenosotros.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'sobrenosotros.html'))
  })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})