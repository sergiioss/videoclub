
const express = require('express');
const router = express.Router();

const AlquileresController = require('../controllers/AlquileresController');


//Endpoint-function links
router.get('/', AlquileresController.getAlquileres);
router.post('/register', AlquileresController.postAlquilerRegister);


//Export
module.exports = router;