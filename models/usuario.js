'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Alquiler, {
        //En este caso, foreignKey hace referencia a como se llama la clave de user en la tabla Sale
        foreignKey: 'usuarioId'
      });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    dni: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};