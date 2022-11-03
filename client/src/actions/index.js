import axios from 'axios'

//las acciones de Redux funcionan mensajeros que entregan información sobre los eventos que ocurren 
//en tu aplicación al almacén Redux.


export function getCountries(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}
//===============FETCH==============================
// export function getCountries(){
//   return function(dispatch){
//       let json = fetch("http://localhost:3001/countries")
//       .then((res)=>res.json(json))
//       .then((data)=> dispatch({
//           type: 'GET_COUNTRIES',
//           payload: data
//       }))}
// }

export function getNameCountries(name){
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: 'GET_NAME_COUNTRIES',
                payload: json.data
            })
        } catch (error) {
           return alert ("Country not found");
        }
    }
}

//==================FETCH==============================
// export function getNameCountries(name){
//   return function(dispatch){
//       try {
//           let json = fetch(`http://localhost:3001/countries?name=${name}`)
//           .then((res)=>res.json(json))
//           .then((data) => dispatch({
//               type: 'GET_NAME_COUNTRIES',
//               payload: data
//           }))
//       } catch (error) {
//           console.log(error);
//       }
//   }
// }

export function getAllActivities() {
    return async function (dispatch) {
      let json = await axios.get("http://localhost:3001/activities");
      return dispatch({
        type:"GET_ACTIVITIES",
        payload: json.data,
      });
    };
  }


  export function postActivity(payload) {
    return async function (dispatch) {
      const activity = axios.post("http://localhost:3001/activities", payload);
      return dispatch({
        type: "POST_ACTIVITY",
        payload: activity,
      });
    };
  }


//=================================FILTROS=============================================================

  export function filterByContinents(payload){
    return{
        type:'FILTER_BY_CONTINENT',
        payload
    }
}

export function setCurrentPage(page){
    return {
      type: 'CURRENT_PAGE',
      payload: page
  
    }
  }

export function filterByActivity(payload){
    return{
        type:'FILTER_BY_ACTIVITY',
        payload
    }

}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: 'ORDER_BY_POPULATION',
        payload
    }
}

//=====================================================================================================================

export function getDetail(id){
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
            })
        } catch (error) {
        return alert("Detail not found")
        }
    }
}

export function resetDetail(){
    return (dispatch => {
      dispatch({
        type:"RESET_DETAIL",
      })
    })
  }