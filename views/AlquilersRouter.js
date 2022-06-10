
const express = require('express');
const router = express.Router();

const AlquilersController = require('../controllers/AlquilersController');


//Endpoint-function links
router.get('/', AlquilersController.getAlquileres);
router.post('/addalquiler', AlquilersController.postAlquilerRegister);


//Export
module.exports = router;