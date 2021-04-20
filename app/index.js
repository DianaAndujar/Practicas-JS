const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1 style="color: red;">Home</h1>')
})

app.get('/home' , (req,res) => {
  res.send(`<h1 style="color: green;">Bienvenido al inicio</h1>`); 
})

app.get('/productos', (req, res) => {
  res.send(`<h1 style="color: green;">Estas en producto</h1>`);
})

app.get('/contactos', (req, res) => {
  res.send(`<h1 style="color: green;">Estas en contacto</h1>`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})