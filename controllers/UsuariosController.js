
const { Usuario } = require('../models/index');
const funcionesBasicas = require('../funcionesBasicas');
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

UsuariosController.postDatosUsuario = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    let nombreperfil = req.body.id;
    
        Usuario.findOne({
        where : { id : nombreperfil}
            
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
    let admin = req.body.admin;

    let errorEmail = funcionesBasicas.validar("email",email);
  
    if(errorEmail === true){
        res.send("Ha habido un error ingresando los datos");
    }

    let array = [nombre,dni,email,telefono];

    for(let campo of array){
        if(campo === ""){
            res.send("No has rellenado todos los campos");
        }
    }

    try {

    await Usuario.findOne({
        where : {dni : dni},
        where : {email: email},
        where : {telefono: telefono}

    }).then(campo => {
        if(campo){
            res.send('Usuario ya existe')
        }else{
            Usuario.create({
                nombre: nombre,
                dni: dni,
                password: password,
                email: email,
                telefono: telefono,
                admin: admin
            })
        }
        res.send('Usuario creado');
    }).catch((error) => {
        res.send(error);
    });
    } catch (error) {
    res.send(error);
    }
};

UsuariosController.putModificarPerfil = async (req, res) => {
    let identidad = req.params.id
    let nombre = req.body.nombre;
    let email = req.body.email;
    let telefono = req.body.telefono;

    Usuario.findOne({
        where : {id : identidad},

    }).then(perfilUsuario => {
        if(!perfilUsuario){
            res.send('Ese Usuario no existe')
        }else{
            perfilUsuario.update({
                nombre : nombre,
                email : email,
                telefono : telefono
            })
            res.send(perfilUsuario);
        }
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