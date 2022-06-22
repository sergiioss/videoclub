'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pelicula.hasMany(models.Alquiler, {
        //En este caso, foreignKey hace referencia a como se llama la clave de user en la tabla Sale
        foreignKey: 'peliculaId'
      });
    }
  }
  Pelicula.init({
    titulo: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    edad_minima: DataTypes.INTEGER,
    genero: DataTypes.STRING,
    director: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    preciop: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};