"use client"; 

import { FC, useState } from 'react'
import styles from './Header.module.css';
import {Modal} from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
    const [signupModal, setSignupModal] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const pathname = usePathname();

    const [login, setLogin] = useState<any>({});

    const loginOpenHandler = () => {
        setLoginModal(true);
        setSignupModal(false)
    }

    const signupOpenHandler = () => {
        setSignupModal(true)
        setLoginModal(false)
    }
    
    const loginHandler = () => {
        if (login?.id === '190103056' && login?.password === '1234'){
            setIsLogin(true);
            setLoginModal(false)
        }
    }

    console.log(pathname.split('/'))

    return (
        <div className={styles.header}>
            <Modal open={signupModal} width={582} onCancel={() => setSignupModal(false)} footer={[]}>
                <div className={styles.signup__wrapper}>
                    <div className={styles.signup__logo}>
                        <img src='logo.png'/>
                    </div>
                    <div className={styles.signup__title}>
                        Sign Up
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Student ID' />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Password' />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Firstname' />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Lastname' />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Email' />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Phone' />
                    </div>
                    <div className={styles.signup__input_wrapper}>
                        <div className={styles.signup__input}>
                            <input placeholder='Program' />
                        </div>
                        <div className={styles.signup__input}>
                            <input placeholder='Course' />
                        </div>
                    </div>
                    <div className={styles.signup__button}>
                        Sign Up
                    </div>
                    <div className={styles.signup__link}>
                        Already have an account? <span onClick={loginOpenHandler}>Login</span>
                    </div>
                </div>
            </Modal>
            <Modal open={loginModal} width={582} onCancel={() => setLoginModal(false)} footer={[]}>
                <div className={styles.signup__wrapper}>
                    <div className={styles.signup__logo}>
                        <img src='logo.png'/>
                    </div>
                    <div className={styles.signup__title}>
                        Login
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='ID' value={login?.id} onChange={(e) => setLogin({...login, id: e.target.value})}/>
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Password' type='password' value={login?.password} onChange={(e) => setLogin({...login, password: e.target.value})} />
                    </div>
                    <div className={styles.login__link}>
                        Forgotten your username or password?
                    </div>
                    <div className={styles.signup__button} onClick={loginHandler}>
                        Login
                    </div>
                    <div className={styles.signup__link}>
                        Already have an account? <span onClick={signupOpenHandler}>Sign Up</span>
                    </div>
                </div>
            </Modal>    
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
                        {
                            !isLogin ? 
                            <>
                                <div className={styles.header__wrapper_signup} onClick={() => setSignupModal(true)}>
                                    Sign Up
                                </div>
                                <div className={styles.header__wrapper_login} onClick={() => setLoginModal(true)}>
                                    Log In
                                </div>
                            </>
                            : 
                            <>
                                <div className={styles.icons__bell}>
                                    <Link href={'/account'} className={styles.account__link}>
                                        <img src='bell.svg' />
                                    </Link>
                                </div>
                                <div className={`${styles.icons} ${pathname?.split('/')[1] === 'account' && styles.icons__account}`}>
                                    <Link href={'/account'} className={styles.account__link}>
                                        <img src='account.svg' />
                                    </Link>
                                </div>
                            </>
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;