const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('¡Hola, Mundo!'));
app.listen(3000, () => console.log('Servidor ejecutandose ene le puerto 3000'));
