
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require('../middlewares/isAdmin');
const AlquilersController = require('../controllers/AlquilersController');


//Endpoint-function links
router.get('/', isAdmin, AlquilersController.getAlquileres);
router.get('/veralquiler/:id', AlquilersController.getAlquilerId);
router.post('/addalquiler', auth, AlquilersController.postAlquilerRegister);


//Export
module.exports = router;