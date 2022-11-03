import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getNameCountries, setCurrentPage } from "../actions";
import styles from "./Styles/SearchBar.module.css"

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")


    function handleInputChange(e){
        e.preventDefault()
         //mediante el estado local 'value' controlo el formulario Y TODO LO QUE VAN ESCRIBIENDO LO CAPTURO
        setName(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault()
        if (name.length === 0) return alert('Search a country')
        dispatch(setCurrentPage(1))
        dispatch(getNameCountries(name)) 
    }

    return(
        <div className={styles.divSearch}>
            <input
             type='text'
             placeholder="Search countries..."
             onChange={(e)=>handleInputChange(e)}
             className={styles.input}
             />
             <button className={styles.btn}type="submit" onClick={(e)=>handleSubmit(e)}>🔍</button>
        </div>
    )
}

