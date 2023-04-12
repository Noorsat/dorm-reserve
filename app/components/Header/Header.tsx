import { FC } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__wrapper_nav}>
                        <div className={styles.header__address}>
                            <div className={styles.header__address_icon}>
                                <img src='location.svg'/>
                            </div>
                            <div className={styles.header__address_text}>
                                Almaty, Karasai region, Kaskelen
                            </div>
                        </div>
                        <div className={styles.header__phone}>
                            <div className={styles.header__phone_icon}>
                                <img src='phone.svg'/>
                            </div>
                            <div className={styles.header__phone_text}>
                                847938473873
                            </div>
                        </div>
                    </div>
                    <div className={styles.header__wrapper_content}>
                        <div className={styles.header__wrapper_lang}>
                            <div className={styles.header__wrapper_lang_text}>
                                EN
                            </div>
                            <div className={styles.header__wrapper_lang_arrow}>
                                <img src='arrow-down.svg' />
                            </div>
                        </div>
                        <div className={styles.header__wrapper_signup}>
                            Sign Up
                        </div>
                        <div className={styles.header__wrapper_login}>
                            Log In
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;