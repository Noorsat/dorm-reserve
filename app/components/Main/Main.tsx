"use client"; 

import styles from './Main.module.css';
import {useState, useEffect} from 'react';

const Main = () => {
    const [logged, setLogged] = useState<boolean>();

    useEffect(() => {
        const logged = window.localStorage.getItem('logged');

        if (logged == 'ok'){
            setLogged(true);
        }else{
            setLogged(false);
        }
    })
    
    return (
        <div className={styles.main}>
            <div className='container'>
                <div className={styles.main__wrapper}>
                    <div className={styles.main__title}>
                        WELCOME TO SDU DORMITORY
                    </div>
                    {
                        logged ?   
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
                        : 
                        <div className={styles.main__button}>
                            START NOW
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Main;