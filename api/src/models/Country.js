const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población

  sequelize.define('Country', {
    id:{
      type:DataTypes.STRING(3),
      primaryKey: true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: true
    },
    subregion:{
      type:DataTypes.STRING,
      allowNull: true
    },
    area:{
      type:DataTypes.INTEGER,
      allowNull: true
    },
    population:{
      type:DataTypes.INTEGER,
      allowNull: true
    }
  },
  { timestamps: false }
  );
};
