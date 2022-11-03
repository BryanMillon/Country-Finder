import React from "react";
import {Link} from 'react-router-dom'
import styles from './Styles/LandingPage.module.css'


export default function LandingPage(){
    return(
      
        <div className={styles.background}>
        <div className={styles.flexTitle}>
      <h1 className={styles.landing}>C🌎UNTRY F🔍NDER</h1>
        </div>
      <div className={styles.containerBtn}>
      <Link to ='/home'>
      <button className={styles.shadow__btn}>
      START TO EXPLORE
</button>
      </Link>
      </div>
        </div> 
    )
}
