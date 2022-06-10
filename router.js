
//Imports
const router = require('express').Router();

const UsuariosRouter = require('./views/UsuariosRouter');
const AlquilersRouter = require('./views/AlquilersRouter');
const PeliculasRouter = require('./views/PeliculasRouter');


//Endpoints roots definition
router.use('/usuarios', UsuariosRouter);
router.use('/alquileres', AlquilersRouter);
router.use('/peliculas', PeliculasRouter);
;

//Export
module.exports = router;