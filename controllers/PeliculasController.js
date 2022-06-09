
const { Pelicula } = require('../models/index');

//UserController object declaration
const PeliculasController = {};

PeliculasController.getPeliculas = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Pelicula.findAll()
    .then(data => {
    
        res.send(data)
    });
};

PeliculasController.postPeliculaRegister = async (req, res) => {

    let titulo = req.body.titulo;
    let duracion = req.body.duracion;
    let edad_minima = req.body.edad_minima;
    let genero = req.body.genero;
    

    Pelicula.create({
        titulo: titulo,
        duracion: duracion,
        edad_minima: edad_minima,
        genero: genero

    }).then(pelicula => {
        res.send(`${pelicula.titulo}, you have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });


};

//Export
module.exports = PeliculasController;