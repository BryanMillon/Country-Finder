
const { Activity, Country } = require("../../db");
const axios = require("axios");


//Hacemos una funcion para traer los datos de la api y meterlos en nuestra base de datos

const getCountries = async () => {
    const countriesTable = await Country.findAll({
      include: [{ model: Activity }],
    });

    if (countriesTable.length === 0) {
      try {
        const apiUrl = await axios.get("https://restcountries.com/v3/all");
        //Primero buscamos la informacion de la api
        const apiInfo = await apiUrl.data.map((e) => {
          return {
            name: e.name.common,
            id: e.cca3,
            flag: e.flags[1],
            continent: e.continents[0],
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
          };
        });
        //Aqui buscamos en nuestra base de datos previamente creada y si no esta metemos la informacion a nuestra base de datos
        apiInfo.map(async (e) => {
          await Country.findOrCreate({
            where: {
              id: e.id,
              name: e.name,
              flag: e.flag,
              continent: e.continent,
              capital: e.capital ? e.capital[0] : "Capital not found",
              subregion: e.subregion ? e.subregion : "Subregion not found",
              area: e.area,
              population: e.population,
            },
          });
        });
        return apiInfo;
      } catch (error) {
       res.status(404).send(error);
      }
    } else {
      return countriesTable;
    }
  };


module.exports = { getCountries };