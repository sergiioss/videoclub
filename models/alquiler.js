'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alquiler.belongsTo(models.Usuario, {
        //userId es la clave importada en este caso
        foreignKey: 'usuarioId'
      });

      Alquiler.belongsTo(models.Pelicula, {
        //userId es la clave importada en este caso
        foreignKey: 'peliculaId'
      });
    }
  }
  Alquiler.init({
    precio: DataTypes.INTEGER,
    fecha_alquiler: DataTypes.STRING,
    fecha_devolucion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alquiler',
  });
  return Alquiler;
};