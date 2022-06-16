
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

AlquilersController.getAlquilerId = async (req, res) => {
    
    let id = req.params.id;

    let infoAlquiler = `SELECT usuarios.nombre AS NombreCliente, peliculas.titulo AS NombrePelicula, alquilers.fecha_alquiler AS FechaAlquiler, alquilers.fecha_devolucion AS FechaDevolucion
    FROM usuarios
    INNER JOIN alquilers ON alquilers.usuarioId = usuarios.id
    INNER JOIN peliculas ON peliculas.id = alquilers.peliculaid
    WHERE usuarioId LIKE ${id}`;

    //A continuación viene un ejemplo de ESTRUCTURA para ejecutar querys raw (crudo) de SQL en Sequelize, en este caso
    //la consulta está almacenada dentro de la variable llamada infoAlquiler. Lo que nos devuelva la consulta se guardará en la variable
    //resultado.

    let resultado = await Alquiler.sequelize.query(infoAlquiler, {
        type: Alquiler.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else{
        res.send("Tu búsqueda es estúpida y no trae nada");
    };

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