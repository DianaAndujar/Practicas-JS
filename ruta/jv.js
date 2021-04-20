const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenido a Inicio')
})

app.get('/contacto', (req, res) => {
    res.send('Bienvenido a Contacto')
  })

  app.get('/Sobre Nosotros', (req, res) => {
    res.send('Bienvenido a Sobre Nosotros')
  })

  app.get('/Compras', (req, res) => {
    res.send('Bienvenidos a compras')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})