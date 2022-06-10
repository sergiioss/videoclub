
const { Alquiler } = require('../models/index');


//UserController object declaration
const AlquilersController = {};

AlquilersController.getAlquileres = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Alquiler.findAll()
    .then(data => {
    
        res.send(data)
    });
};

AlquilersController.postAlquilerRegister = async (req, res) => {

    let usuarioId = req.body.usuarioId;
    let peliculaId = req.body.peliculaId;
    let precio = req.body.precio;
    let fecha_alquiler = req.body.fecha_alquiler;
    let fecha_devolucion = req.body.fecha_devolucion;
    
    Alquiler.create({
        usuarioId: usuarioId,
        peliculaId: peliculaId,
        precio: precio,
        fecha_alquiler: fecha_alquiler,
        fecha_devolucion: fecha_devolucion

    }).then(alquiler=> {
        res.send(`${alquiler.precio}, you have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });

};

//Export
module.exports = AlquilersController;