const { Router } = require("express");
const { Activity, Country } = require("../db");
const axios = require("axios");
const router = Router();
const {getCountries} = require("./components/utils")

  //RUTA PARA TRAER LOS PAISES
  router.get('/countries', async(req,res)=>{
    const {name} = req.query
    let totalCountries = await getCountries();
    if(name){
        let countryName = await totalCountries.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
       
        countryName.length ? res.status(200).send(countryName) : res.status(404).send('Country not found')
    }else{
        res.status(200).send(totalCountries)
    }
})

//RUTA PARA BUSCAR LOS PAISES
router.get("/countries/:id", async (req, res) => {
    const { id } = req.params;
    
      const getCountry = await Country.findByPk(id.toUpperCase(), {
        include: {
          model: Activity,
        }})

        if(getCountry) return res.status(200).send(getCountry)
        else res.status(404).send('ID not found')
    
  });
  
  //RUTA PARA POSTEAR LAS ACTIVIDADES, aqui se unen
  router.post("/activities", async (req, res) => {
    const { countries, name, difficulty, duration, season } = req.body;
    try {
      const id = uuidv4();
      const createActivity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
      });
      countries.forEach(async(countryId)=>{
        const country = await Country.findByPk(countryId);
        country.addActivity(createActivity)
      })
      return res.status(200).send({createActivity, countries});
    } catch (error) {
      res.status(404).send("Activity not created");
    }
  });
  //RELACION
  const getAllActivities = async function (){
    const data = await Activity.findAll({
        include:[{ 
            model: Country,
            attributes: ["name"],
            through:{
                attributes:  {exclude: ["createdAt", "updatedAt"]},
                }
        }],
    });
    return data;
  };

 router.get('/activities', async (req,res) =>{
  try {
    const activities = await getAllActivities();
    res.status(200).send(activities);
  } catch (error) {
    res.status(400).send(error);
  }
})


router.delete("/activities/:id", async function (req, res) {
  const { id } = req.params;
  try {
      if (id) {
          await Activity.destroy({
              where: { id: id },
          });
          res.status(200).send("Activity eliminated");
      }
  } catch (error) {
      console.log(error);
  }
});

// const { Router } = require('express')

// const router = Router()

// // Importar todos los routers;
// const activities = require('./components/activities')
// const countries = require('./components/countries')

// // Configurar los routers
// router.use('/activity', activities)
// router.use('/countries', countries)


module.exports = router;