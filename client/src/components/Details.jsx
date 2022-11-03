import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDetail, resetDetail} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from './Styles/Details.module.css'
import Loader from "./Loader";

export default function Detail(props){
  
    const dispatch = useDispatch()
    const countryDetail = useSelector(state => state.detail)

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
        dispatch(resetDetail());
    },[dispatch, props.match.params.id])

// console.log(Object.keys(countryDetail))
// console.log(countryDetail)
 return (
        <div className={styles.background} >

          
          {Object.keys(countryDetail).length ? ( 
            <div className={styles.flex}>
              <div>
              <img className={styles.img} src={countryDetail.flag} alt="flag" />
              </div>
              <div >
                <h1 className={styles.name}>{countryDetail.name}</h1>
                <h2 className={styles.nameAct}>({countryDetail.id})</h2>
                <h2 className={styles.nameAtr}> Capital: {countryDetail.capital}</h2>
                <h2 className={styles.nameAtr}>Continent: {countryDetail.continent}</h2>
                <h2 className={styles.nameAtr}>Subregion: {countryDetail.subregion}</h2>
                <h2 className={styles.nameAtr}>Area: {countryDetail.area} Km2</h2>
                <h2 className={styles.nameAtr}>Population: {countryDetail.population}</h2>
              </div>
              <div>
                <h2 className={styles.name}>Activities:</h2>
                {countryDetail.Activities?.map((activity) => {
                  return (
                    <div key={activity.id}>
                      <h3 className={styles.nameAct}>{activity.name}</h3>
                      <h3 className={styles.nameAtr}>Difficulty: {activity.difficulty}</h3>
                      <h3 className={styles.nameAtr}>Duration: {activity.duration}hs</h3>
                      <h3 className={styles.nameAtr}>Season: {activity.season}</h3>
                      <br/>
                    </div>
                  );
                 })}
              </div>
            </div>
          ) : (
            <Loader/>
            )}
          
          <div>
            <Link to="/activities">
              <button className={styles.shadow__btn}>Create New Activity</button>
            </Link>
          </div>
        </div>
      );
    }

