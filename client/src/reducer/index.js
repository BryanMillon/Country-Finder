
//El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado.
// especifican cómo cambió el estado de la aplicación en respuesta A LA ACCION

const initialState = {
    countries : [],
    allCountries:[],
    activities:[],
    detail:[],
    currentPage: 1,
}


function rootReducer(state= initialState, action){
    switch(action.type){
      case 'GET_COUNTRIES':
        return{
            ...state,
            countries: action.payload,
            allCountries:action.payload
        }

        case 'GET_NAME_COUNTRIES':
          return{
            ...state,
            countries: action.payload
          }

        case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

      case "POST_ACTIVITY":
        return {
          ...state,
          // postActivity: [...state.activities, action.payload],
        };

      case 'FILTER_BY_CONTINENT':
        const everyCountries = state.allCountries;
        const filterContinent = action.payload === "All" ? everyCountries : everyCountries.filter((el)=> el.continent  === action.payload)
        return{
            ...state,
            countries: filterContinent
        }

        case 'FILTER_BY_ACTIVITY':
          let filter =
          action.payload === "All"
            ? state.allCountries
            : state.allCountries.filter((country) => {
                const activities = country.Activities.map((activity) => activity.name);
                // console.log(country.activities);
                return activities.includes(action.payload);
              });
        return {
          ...state,
          countries: filter}
          

            case 'ORDER_BY_NAME':
                const orderByName =
                action.payload === "asc" ? state.countries.sort((a, b) => {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    })
                  : state.countries.sort((a, b) => {
                      if (a.name < b.name) {
                        return 1;
                      }
                      if (a.name > b.name) {
                        return -1;
                      }
                      return 0;
                    });
              return {
                ...state,
                countries: orderByName,
              };
      
              case "ORDER_BY_POPULATION":
                const orderByPopulation =
                action.payload === "asc"
                  ? state.countries.sort((a, b) => {
                      if (a.population < b.population) {
                        return -1;
                      }
                      if (a.population > b.population) {
                        return 1;
                      }
                      return 0;
                    })
                  : state.countries.sort((a, b) => {
                      if (a.population < b.population) {
                        return 1;
                      }
                      if (a.population > b.population) {
                        return -1;
                      }
                      return 0;
                    });
              return {
                ...state,
                countries: orderByPopulation,
              };

          case "GET_DETAILS":
            return{
              ...state,
              detail: action.payload
            }

            case "RESET_DETAIL":
              return {
                ...state,
                detail: []
              }  

              case 'CURRENT_PAGE':
                return {
                  ...state,
                  currentPage: action.payload
                }


        default:
            return state
}
}

export default rootReducer;