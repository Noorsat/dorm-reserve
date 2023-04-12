import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className='container'>
                <div className={styles.main__wrapper}>
                 <div className={styles.main__logo}>
                        <img src='/logo.png' />
                    </div>
                    <div className={styles.main__title}>
                        WELCOME TO SDU DORMITORY
                    </div>
                    <div className={styles.main__time}>
                        <div className={styles.main__time_title}>
                            REGISTRATION STARTS IN 
                        </div>
                        <div className={styles.main__time_text}>
                            2days : 23hours : 45min
                        </div>
                        <div className={styles.main__time_button}>
                            Register now
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;