
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");

const AlquilersController = require('../controllers/AlquilersController');


//Endpoint-function links
router.get('/', AlquilersController.getAlquileres);
router.post('/addalquiler', auth, AlquilersController.postAlquilerRegister);


//Export
module.exports = router;