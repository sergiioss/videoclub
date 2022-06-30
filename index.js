
const express = require('express');
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4000; //Configuramos puerto heroku se añade el process.env.port que es el puerot que pondra heroku en caso de que no tenga utilizara el 3000 definido por nosotros.
const db = require('./db/db');

//Config Cors Options
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

const router = require('./router.js');
// Middleware
app.use(express.json()) //Permite decodificar en Json
app.use(cors(corsOptions));
//Get para saber cuando esta la aplicacion subida correctamente
app.get('/', (req, res) => {res.send('Bienvenidos al videoclub');});
app.use(router);

db.then(()=>{
    app.listen(PORT, ()=> {console.log('servidor levantado en el puerto', PORT)});

}).catch((err)=> console.log(err.message))

