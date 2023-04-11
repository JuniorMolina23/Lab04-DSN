const express = require('express');
const app = express();
const path = require('path');

app.set('views','')
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hola Amigo !');
});
app.get('/clientes', (req,res)=>{
    res.render(path.join(__dirname, 'views', 'clientes.ejs'))
})
app.get('/productos', (req,res)=>{
    res.render(path.join(__dirname, 'views', 'productos.ejs'))
})

app.listen(9000, () => {
  console.log('Servidor corriendo en el puerto 9000');
});
