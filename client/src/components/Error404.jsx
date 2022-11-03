import styles from './Styles/Error404.module.css'

export default function Error404(){

    return(
        <div className={styles.background}>
            <h1 className={styles.title}>Error 404</h1>
            <h3 className={styles.subtitle}>Invalid URL</h3>
        </div>
    )
}