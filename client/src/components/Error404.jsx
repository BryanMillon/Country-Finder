import styles from "./Styles/Error404.module.css";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className={styles.bg}>
      <div className={styles.central_body}>
        <img
          className={styles.image_404}
          src="http://salehriaz.com/404Page/img/404.svg"
          width="300px"
        />
      </div>
      <div className={styles.objects}>
          <img
            className={styles.object_earth}
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
          />
          <img
            className={styles.object_moon}
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="70px"
          />

          <img
            className={styles.object_astronaut}
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="20px"
          />
      </div>
      <Link to='/home'>
        <button className={styles.shadow__btn}>
            GO BACK HOME
        </button>
      </Link>
    </div>
  );
}
