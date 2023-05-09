const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}🚀`)); //Windows punto 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});