
const { Usuario } = require('../models/index');

//UserController object declaration
const UsuariosController = {};

UsuariosController.getUsuarios = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Usuario.findAll()
    .then(data => {
    
        res.send(data)
    });
};

UsuariosController.postUsuarioRegister = async (req, res) => {

    let nombre = req.body.nombre;
    let dni = req.body.dni;
    let password = req.body.password;
    let email = req.body.email;
    let telefono = req.body.telefono;

    

    Usuario.create({
        nombre: nombre,
        dni: dni,
        password: password,
        email: email,
        telefono: telefono
        
    }).then(usuario => {
        res.send(`${usuario.nombre}, you have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });


};

//Export
module.exports = UsuariosController;