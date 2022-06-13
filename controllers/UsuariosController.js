
const { Usuario } = require('../models/index');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let authConfig = require('../config/auth');

//UserController object declaration
const UsuariosController = {};

UsuariosController.getUsuarios = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Usuario.findAll({
        attributes:{
            exclude: ['password','createdAt','updatedAt']
        }
    })
    .then(data => {
    
        res.send(data)
    });
};

UsuariosController.getDatosUsuario = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    let nombreperfil = req.body.nombre;
    
        Usuario.findOne({
        where : { nombre : nombreperfil}
            
        }).then(perfilUsuario => {
            if(!perfilUsuario){
                res.send('Ese Usuario no existe')
            }else{
                
                res.send(`${perfilUsuario.id},${perfilUsuario.nombre},${perfilUsuario.dni},${perfilUsuario.email},${perfilUsuario.telefono}`)
    }
    });
};

UsuariosController.postUsuarioRegister = async (req, res) => {

    let nombre = req.body.nombre;
    let dni = req.body.dni;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
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

    UsuariosController.loginUsuario = (req, res) => {

        let numerodni = req.body.dni;
        let password = req.body.password;
    
        Usuario.findOne({
            where : { dni : numerodni}
    
        }).then(busquedaUsuario => {
    
            if(!busquedaUsuario){
                res.send("Usuario o password incorrectos");
            } else {
                if( bcrypt.compareSync(password, busquedaUsuario.password)){
                    //Ahora ya si hemos comprobado que el usuario existe (email es correcto) y el password SI corresponde a ese usuario
    
                    let token = jwt.sign({ user: busquedaUsuario }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
    
                    console.log(token);
                    
                    let loginOKmessage = `Welcome again ${busquedaUsuario.nombre}`
                    res.json({
                        loginOKmessage,
                        user: {
                            nombre : busquedaUsuario.nombre,
                            dni : busquedaUsuario.dni
                        },
                        token: token
                    })
                }else{
                    res.send('El user o el pass no es correcto')
                };
            };
    
        }).catch(err => console.log(err));
    };


//Export
module.exports = UsuariosController;