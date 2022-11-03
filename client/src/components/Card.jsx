import React from "react";
import styles from './Styles/Card.module.css'

export default function Card({ flag, name, continent, id}) {
    return (
      
<div className={styles.card} key={id}>
<img className={styles.cardImg}src={flag} alt="Flag" />
  <div className={styles.cardInfo}>
    <p className={styles.textBody}>{name}</p>
    <p className={styles.textTitle}>{continent}</p>
  </div>
</div>

    );
  }
