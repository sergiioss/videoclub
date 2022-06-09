
const express = require('express');

const app = express();

const port = 3000;

const db = require('./db/db');

const router = require('./router.js');
// Middleware

app.use(express.json()) //Permite decodificar en Json

app.use(router);

db.then(()=>{
    app.listen(port, ()=> {console.log('servidor levantado en el puerto', port)});

}).catch((err)=> console.log(err.message))

