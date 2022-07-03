
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

PeliculasController.getFiltroDirector = async (req, res) => {
    let directorPelicula = req.params.director

    let consulta = `SELECT titulo, duracion, director FROM Peliculas WHERE director LIKE '${directorPelicula}%'`;

    let resultado = await Pelicula.sequelize.query(consulta, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else {
        res.send("No existe ese Director");
    };
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

PeliculasController.getTopRated= async (req, res) => {

    let pelisEdad = `SELECT * FROM videoclub.Peliculas WHERE rating <= 10 ORDER BY rating DESC;`;

    let resultado = await Pelicula.sequelize.query(pelisEdad, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else {
        res.send("Tu búsqueda es estúpida y no trae nada");
    };

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

    let consulta = `SELECT titulo, duracion, url, rating, sinopsis, genero FROM Peliculas WHERE titulo LIKE '%${letraPelicula}%'`;

    let resultado = await Pelicula.sequelize.query(consulta, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else {
        res.send("No existe esa pelicula");
    };

};

PeliculasController.borrar = async (req, res) => {
    let idpelicula = req.params.id;

        Pelicula.destroy({
        where : {id : idpelicula},

    }).then( peliculaborrada => {

        if(!peliculaborrada){
            res.send("Esta pelicula no existe");
        }else {
            res.send("La pelicula ha sido borrada");
        };

    }).catch((error) => {
       res.send(error);
});
};

PeliculasController.postPeliculaRegister = async (req, res) => {

    let titulo = req.body.titulo;
    let duracion = req.body.duracion;
    let edad_minima = req.body.edad_minima;
    let genero = req.body.genero;
    let director = req.body.director;
    let sinopsis = req.body.sinopsis;
    let rating = req.body.rating;
    let preciop = req.body.preciop;
    let url = req.body.url;


    try {

        await Pelicula.findOne({
            where : {titulo : titulo}

        }).then(campo => {
            if(campo){
                res.send(`La Pelicula, ${campo.titulo} ya existe`)
            }else{
                Pelicula.create({
                    titulo: titulo,
                    duracion: duracion,
                    edad_minima: edad_minima,
                    genero: genero,
                    director: director,
                    sinopsis: sinopsis,
                    rating: rating,
                    preciop: preciop,
                    url: url
                })
                res.send(`Pelicula añadida correctamente    `);
            }
        }).catch((error) => {
            res.send(error);
        });
        } catch (error) {
        res.send(error);
        }
};

//Export
module.exports = PeliculasController;