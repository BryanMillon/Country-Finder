import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getCountries,
  getAllActivities,
  filterByContinents,
  filterByActivity,
  orderByName,
  orderByPopulation,
  setCurrentPage,
} from "../actions";

import Loader from "./Loader";
import Card from "./Card";
import Pages from "./Pages";
import SearchBar from "./SearchBar";
import styles from "./Styles/Home.module.css";

export default function Home() {
  //---------------------------------------------------

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [orden, setOrden] = useState("");
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllActivities());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
    setContinentF("continents");
    setAz("Alphabetical Order");
    setPopulationF("population");
    setActivitiesF("All");
  }

  //---------------------------------------------------

  const [countriesPerPage, SetcountriesPerPage] = useState(9); // en la primer pag q muestre 9

  const pages = (pageNum) => {
    //para el render
    dispatch(setCurrentPage(pageNum));
  };

  let lastIdx =
    currentPage === 1
      ? currentPage * countriesPerPage
      : currentPage * countriesPerPage - 1; // en la primera página, lastIdx = 1 * 9 = 9
  let firstIdx = lastIdx - countriesPerPage; // en la primera página, firstIdx = 9 - 9 = 0

  let currentCountries = allCountries.slice(firstIdx, lastIdx); // en la primera página, currentCharacters = countries.slice(0,9)
  //slice tomo del array lo q quiero

  useEffect(() => {
    if (currentPage === 1) {
      SetcountriesPerPage(9);
    } else {
      SetcountriesPerPage(10);
    }
  }, [currentPage]);

  //---------------------------------------------------

  const [continentF, setContinentF] = useState("");
  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    dispatch(filterByContinents(e.target.value));
    setContinentF(e.target.value);
  }

  const [activitiesF, setActivitiesF] = useState("");
  function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    dispatch(filterByActivity(e.target.value));
    setActivitiesF(e.target.value);
  }

  const [az, setAz] = useState("");
  function handleFilterName(e) {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    dispatch(orderByName(e.target.value));
    setOrden(e.target.value);
    setAz(e.target.value);
  }

  const [populationF, setPopulationF] = useState("");
  function handleFilterPopulation(e) {
    e.preventDefault();
    dispatch(setCurrentPage(1));
    dispatch(orderByPopulation(e.target.value));
    setOrden(e.target.value);
    setPopulationF(e.target.value);
  }

  //  console.log(allCountries);

  return !allCountries.length ? (
    <Loader />
  ) : (
    <div className={styles.background}>
      <div className={styles.nav}>
        <button
          className={styles.reload}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          RELOAD COUNTRIES AND CLEAN FILTERS
        </button>
        <h1 className={styles.title}>C🌎UNTRY F🔍NDER</h1>
        <Link className={styles.link} to="/activities">
          {" "}
          Create Activity
        </Link>
      </div>

      <div>
        <SearchBar />
        <br />
        {/* <div className={styles.filter}> */}
        <select
          value={continentF}
          onChange={(e) => {
            handleFilterContinent(e);
          }}
          className={styles.filter}
        >
          <option hidden value="Continents">
            Continents
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          value={az}
          onChange={(e) => {
            handleFilterName(e);
          }}
          className={styles.filter}
        >
          <option hidden value="Alphabetical Order">
            Alphabetical Order
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select
          value={populationF}
          onChange={(e) => handleFilterPopulation(e)}
          className={styles.filter}
        >
          <option hidden value="Population">
            Population
          </option>
          <option value="asc">📈</option>
          <option value="desc">📉</option>
        </select>

        <select
          value={activitiesF}
          onChange={(e) => handleFilterActivity(e)}
          className={styles.filter}
        >
          <option hidden value="All">
            Activities
          </option>
          {activities?.map((act) => (
            <option id={act.id} key={act.id} value={act.name}>
              {act.name}
            </option>
          ))}
        </select>

   

        <Pages
          totalAmount={allCountries.length}
          pageNumber={pages}
          amountPerPage={currentCountries.length}
          currentPage={currentPage}
        />

        <div className={styles.wrapper}>
          {currentCountries?.map((el) => {
            return (
              <div key={el.id} className={styles.containerCard}>
                <Link
                  className={styles.link}
                  to={`/countries/${el.id}`}
                  key={el.id}
                >
                  <Card
                    name={el.name}
                    flag={el.flag}
                    continent={el.continent}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
