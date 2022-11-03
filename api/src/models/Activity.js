const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

  sequelize.define('Activity',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
      },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    difficulty:{
        type:DataTypes.ENUM("1","2","3","4","5"),
        allowNull:false,
        
    },
    duration:{
        type:DataTypes.STRING,
        allowNull:false
    },
    season:{
        type:DataTypes.ENUM("Spring", "Summer", "Winter", "Autumn"),
        allowNull:false
    }
  },
  { timestamps: false }
  )}