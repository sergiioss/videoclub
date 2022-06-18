
const express = require('express');
const router = express.Router();
const PeliculasController = require('../controllers/PeliculasController');
const auth = require("../middlewares/auth");
const isAdmin = require('../middlewares/isAdmin');


//Endpoint-function links
router.get('/', PeliculasController.getPeliculas);
router.get('/filtrar/:genero', PeliculasController.getFiltroGenero);
router.get('/edadpeliculas/:edad_minima', PeliculasController.getEdadPeliculas);
router.post('/addpelicula', auth, PeliculasController.postPeliculaRegister);
router.post('/letrapelicula', PeliculasController.postLetraPeliculas);
router.delete('/borrarpelicula/:id', isAdmin, PeliculasController.borrar);


//Export
module.exports = router;