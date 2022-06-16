
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

PeliculasController.getFiltroGenero = (req, res) => {
    let generoPelicula = req.params.genero

    Pelicula.findAll({
    where : { genero : generoPelicula}

    }).then(listadoPeliculas => {

        if(!listadoPeliculas){
            res.send('Ese genero no existe');

        }else{
            res.send(listadoPeliculas);
        };
    });
};

PeliculasController.getEdadPeliculas = async (req, res) => {
    
    let mayorEdad = req.params.edad_minima;

    let pelisEdad = `SELECT * FROM videoclub.Peliculas WHERE (edad_minima <= ${mayorEdad});`;

    let resultado = await Pelicula.sequelize.query(pelisEdad, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else {
        res.send("Tu búsqueda es estúpida y no trae nada");
    };


};

PeliculasController.postLetraPeliculas = async (req, res) => {

    let letraPelicula = req.body.titulo;

    let consulta = `SELECT titulo, duracion FROM Peliculas WHERE titulo LIKE '%${letraPelicula}%'`;

    let resultado = await Pelicula.sequelize.query(consulta, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else {
        res.send("Tu búsqueda es estúpida y no trae nada");
    };
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