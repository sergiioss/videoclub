
const express = require('express');
const router = express.Router();
const PeliculasController = require('../controllers/PeliculasController');


//Endpoint-function links
router.get('/', PeliculasController.getPeliculas);
router.get('/filtrar/:genero', PeliculasController.getFiltroGenero);
router.get('/edadpeliculas/:edad_minima', PeliculasController.getEdadPeliculas);
router.post('/addpelicula', PeliculasController.postPeliculaRegister);
router.post('/letrapelicula', PeliculasController.postLetraPeliculas);



//Export
module.exports = router;