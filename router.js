
//Imports
const router = require('express').Router();

const UsuariosRouter = require('./views/UsuariosRouter');
const AlquileresRouter = require('./views/AlquileresRouter');
const PeliculasRouter = require('./views/PeliculasRouter');


//Endpoints roots definition
router.use('/usuarios', UsuariosRouter);
router.use('/alquileres', AlquileresRouter);
router.use('/peliculas', PeliculasRouter);
;

//Export
module.exports = router;