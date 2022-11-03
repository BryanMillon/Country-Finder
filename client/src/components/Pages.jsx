import React from "react";
import styles from './Styles/Pages.module.css'

export default function Pages({  totalAmount, pageNumber, currentPage  }) {
  const pageNumbers = []
  const maxPage=  1+Math.ceil((totalAmount-9)/10);//redondeo todos mis paises por la cantidad de paises x pag
 
  for (let i=0; i < maxPage; i++) { 
    pageNumbers.push(i+1)
    }

  return (
      <div className={styles.pages}>
        {pageNumbers &&
          pageNumbers.map((num) => {
            return (
              <button className={currentPage === num ? styles.btn2 : styles.btn}
                key={num}
                onClick={() => pageNumber(num)} > {num} </button>
            )
          })}
      </div>
  )
}