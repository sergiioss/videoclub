
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const UsuariosController = require('../controllers/UsuariosController');


//Endpoint-function links
router.get('/', auth, UsuariosController.getUsuarios);
router.post('/perfil', auth, UsuariosController.postDatosUsuario);
router.post('/register', UsuariosController.postUsuarioRegister);
router.post('/login', UsuariosController.loginUsuario);
router.put('/modificarperfil/:id', auth, UsuariosController.putModificarPerfil);


//Export
module.exports = router;