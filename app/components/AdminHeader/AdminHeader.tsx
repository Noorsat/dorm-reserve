import {FC, useState} from 'react';
import styles from './AdminHeader.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminHeader : FC<any> = ({role} : any) => {
    const [langOpen, setLangOpen] = useState<boolean>(false);
    const [lang, setLang] = useState<string>('EN');

    const router = useRouter();

    const langOpenHandler = () => {
        setLangOpen(!langOpen);
    }

    const langChangeHandler = (lang : string) => {
        setLang(lang);
        setLangOpen(false);
    }

    const logoutHandler = () => {
        localStorage.removeItem("logged");
        router.push("/")
    }

    return(
        <div className={styles.header}>
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <Link href='/'>
                            <img src="logo.svg" />
                        </Link>
                    </div>
                    <div className={styles.header__content}>
                        <div className={styles.header__lang_wrapper}>
                            <div className={styles.header__wrapper_lang} onClick={langOpenHandler}>
                                <div className={styles.header__wrapper_lang_text}>
                                    {lang}
                                </div>
                                <div className={styles.header__wrapper_lang_arrow}>
                                    <img src='arrow-down.svg' />
                                </div>
                            </div>
                            <div className={`${styles.header__langs} ${langOpen && styles.active}`}>
                                <div className={styles.header__lang} onClick={() => langChangeHandler('KZ')}>
                                    KZ
                                </div>
                                <div className={styles.header__lang} onClick={() => langChangeHandler('RU')}>
                                    RU
                                </div>
                                <div className={styles.header__lang} onClick={() => langChangeHandler('EN')}>
                                    EN
                                </div>
                            </div>
                        </div>
                        <div className={styles.header__logout} onClick={logoutHandler}>
                            Log Out
                        </div>
                        <div className={styles.header__role}>
                            {role?.split("_")[1]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader;