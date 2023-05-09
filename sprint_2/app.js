const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('El servidor esta corriendo en el puerto '+ port));

app.get('/', function(req, res){
    const rutaCompleta = path.join(__dirname, './views/index.html')
    res.sendFile(rutaCompleta);
})

