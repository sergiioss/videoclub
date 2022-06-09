
const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/UsuariosController');


//Endpoint-function links
router.get('/', UsuariosController.getUsuarios);
router.post('/register', UsuariosController.postUsuarioRegister);



//Export
module.exports = router;