
const express = require('express');
const router = express.Router();

const PeliculasController = require('../controllers/PeliculasController');


//Endpoint-function links
router.get('/', PeliculasController.getPeliculas);
router.post('/addpelicula', PeliculasController.postPeliculaRegister);



//Export
module.exports = router;