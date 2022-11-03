// const { Router } = require('express')
// const { Country, Activity } = require('../../db.js')
// const router = Router()
// const { v4: uuidv4 } = require("uuid");

//   //RUTA PARA POSTEAR LAS ACTIVIDADES, aqui se unen
//   router.post("/", async (req, res) => {
//     const { countries, name, difficulty, duration, season } = req.body;
//     try {
//       const id = uuidv4();
//       const createActivity = await Activity.create({
//         id,
//         name,
//         difficulty,
//         duration,
//         season,
//       });
//       countries.forEach(async(countryId)=>{
//         const country = await Country.findByPk(countryId);
//         country.addActivity(createActivity)
//       })
//       return res.status(200).send({createActivity, countries});
//     } catch (error) {
//       res.status(404).send("Activity not created");
//     }
//   });
//   const getAllActivities = async function (){
//     const data = await Activity.findAll({
//         include:[{ 
//             model: Country,
//             attributes: ["name"],
//             through:{
//                 attributes:  {exclude: ["createdAt", "updatedAt"]},
//                 }
//         }],
//     });
//     return data;
//   };
//  router.get('/', async (req,res) =>{
//   try {
//     const activities = await getAllActivities();
//     res.status(200).send(activities);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// })
// router.delete("/:id", async function (req, res) {
//   const { id } = req.params;
//   try {
//       if (id) {
//           await Activity.destroy({
//               where: { id: id },
//           });
//           res.status(200).send("Activity eliminated");
//       }
//   } catch (error) {
//       console.log(error);
//   }
// });