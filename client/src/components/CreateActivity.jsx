import React, { useState, useEffect } from "react";
import { postActivity, getAllActivities, getCountries } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./Styles/CreateActivity.module.css";

// import axios from "axios";
import Loader from "./Loader";

export default function AddActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) =>
    state.countries.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
  );

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Please, enter a Activity name.";
    }
    if (!input.difficulty) {
      errors.difficulty = "Please, select the difficulty";
    }
    if (!input.duration) {
      errors.duration = "Please, select the duration";
    }
    if (!input.season) {
      errors.season = "Please, select the season";
    }
    // if(!input.countries.length) {errors.countries = "Please, select at least one country"; }
    return errors;
  }

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getCountries());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.countries.find((p) => p === e.target.value)) {
      return alert("This country has already been selected");
    }
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
    //  setErrors(validate({
    //  ...input,
    //  countries: [...input.countries, e.target.value]
    // }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(input));
    alert("Activity Created");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    history.push("/home");
    // window.location.reload(false);
  }

  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== e), // filtrame por todo lo que no sea ese elemento, me devuleve todo sin ese elemento.
    });
  }

  console.log(input)
  console.log(countries)

  return !countries.length ? (
    <Loader />
  ) : (
    <div className={styles.background}>
      <div className={styles.containerA}>
        <h1 className={styles.heading}>CREATE YOUR ACTIVITY</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.container}>
            <div>
              <label className={styles.titles}>DIFFICULTY</label>
              <br />
              <select
                className={styles.selects}
                //  value={input.difficulty}
                name="difficulty"
                multiple={false}
                defaultValue="default"
                onChange={(e) => handleChange(e)}
              >
                <option hidden value="default"></option>
                <option value="1">1-Easy</option>
                <option value="2">2-Chill</option>
                <option value="3">3-Normal</option>
                <option value="4">4-Hard</option>
                <option value="5">5-Hardcore</option>
              </select>
              {errors.difficulty && (
                <p className={styles.error}>{errors.difficulty}</p>
              )}
            </div>

            <div>
              <label className={styles.titles}>DURATION</label>
              <br />
              <select
                multiple={false}
                defaultValue="default"
                className={styles.selects}
                // value={input.duration}
                name="duration"
                onChange={(e) => handleChange(e)}
              >
                <option hidden value="default"></option>
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
                <option value="5">5 hours</option>
              </select>
              {errors.duration && (
                <p className={styles.error}>{errors.duration}</p>
              )}
            </div>

            <div>
              <label className={styles.titles}>SEASON</label>
              <br />
              <select
                multiple={false}
                defaultValue="default"
                className={styles.selects}
                // value={input.season}
                name="season"
                onChange={(e) => handleChange(e)}
              >
                <option hidden value="default"></option>
                <option value="Summer">🌴Summer🌴</option>
                <option value="Spring">🍃Spring🍃</option>
                <option value="Autumn">🍂Autumn🍂</option>
                <option value="Winter">❄️Winter❄️</option>
              </select>
              {errors.season && <p className={styles.error}>{errors.season}</p>}
            </div>

            <div>
              <label className={styles.titles}>NAME</label>
              <br />
              <input
                className={styles.selects}
                type="text"
                // value={input.name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div>
              <label className={styles.titles}>COUNTRIES</label>
              <br />
              <select
                multiple={false}
                defaultValue="default"
                className={styles.selects}
                // value={input.countries}
                onChange={(e) => handleSelect(e)}
              >
                <option hidden value="default"></option>
                {countries.map((country) => (
                  <option value={country.id} key={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              {/* {errors.countries && (<p className={styles.error}>{errors.countries}</p>)} */}
            </div>
           
            <div className={styles.wrapper}>
              {input.countries.map((country) => (
                <div className={styles.divMiniCards} key={country}>
                  <div className={styles.miniCards}>
                    <input
                      className={styles.btnMiniCards}
                      type="button"
                      onClick={() => handleDelete(country)}
                      value="X"
                    />
                    <h3 className={styles.textMiniCards}>{country}</h3>
                  </div>
                </div>
              ))}
            </div>
            <input
              className={styles.btn}
              type="submit"
              value="Create Activity"
              disabled={
                !input.name ||
                !input.difficulty ||
                !input.duration ||
                !input.season ||
                !input.countries.length
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}
