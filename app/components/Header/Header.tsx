"use client"; 

import { FC, useEffect, useState } from 'react'
import styles from './Header.module.css';
import {Modal} from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Select from '../Select/Select';
import { useRouter } from 'next/navigation';

const Header: FC = () => {
    const [signupModal, setSignupModal] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [resetPasswordModal, setResetPasswordModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>();
    const [selects, setSelects] = useState<any>([
        {
            title: 'Faculty',
            options: [
                {
                    title:'Business School',
                    text: 'BS'
                },
                {
                    title:'Engineering and Natural Sciences',
                    text: 'ENS'
                },
                {
                    title:'Education an Humanities',
                    text: 'EH'
                },
                {
                    title:'Law and Social Sciences',
                    text: 'LSS'
                },
            ],
            open: false,
            answer:'',
            large: true
        },
        {
            title: 'Course',
            options: [
                {
                    title:'1',
                },
                {
                    title:'2',
                },
                {
                    title:'3',
                },
                {
                    title:'4',
                },
            ],
            open: false,
            answer:''
        },
        {
            title: 'Gender',
            options: [
                {
                    title:'Female',
                    text: 'F'
                },
                {
                    title:'Male',
                    text: 'M'
                },
            ],
            open: false,
            answer:''
        }
    ]);

    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const logged = localStorage.getItem('logged')

        if (logged === 'ok'){
            setIsLogin(true);
        }else{
            setIsLogin(false);
            router.push("/")
        }
    }, [])

    const [login, setLogin] = useState<any>({});

    const loginOpenHandler = () => {
        setLoginModal(true);
        setSignupModal(false)
    }

    const signupOpenHandler = () => {
        setSignupModal(true)
        setLoginModal(false)
    }

    const forgotHandler = () => {
        setResetPasswordModal(true);
        setLoginModal(false);
    }

    const goLoginHandler = () => {
        setLoginModal(true);
        setResetPasswordModal(false)
    }
    
    const loginHandler = () => {
        if (login?.id === '190103056' && login?.password === '1234'){
            setIsLogin(true);
            setLoginModal(false)
            localStorage.setItem('logged', 'ok');
            window.location.reload()
        }
    }

    const logoutHandler = () => {
        localStorage.removeItem("logged");
        window.location.reload();
    }

    return (
        <div className={styles.header}>
            <Modal open={signupModal} width={582} onCancel={() => setSignupModal(false)} footer={[]}>
                <div className={styles.signup__wrapper}>
                    <div className={styles.signup__logo}>
                        <Link href='/'>
                            <img src='logo.png'/>
                        </Link>
                    </div>
                    <div className={styles.signup__title}>
                        Sign Up
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Student ID' />
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
                    <div className={styles.signup__input_selects}>
                        {
                            selects?.map((item : any, index: number) => (
                                <Select data={item} selects={selects} onChange={setSelects} number={index}/>
                            ))
                        } 
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Create your password' type='password' />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Confirm your password' type='password' />
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
                    <div className={styles.login__link} onClick={forgotHandler}>
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
            <Modal open={resetPasswordModal} width={582} onCancel={() => setLoginModal(false)} footer={[]}>
                <div className={styles.signup__wrapper}>
                    <div className={styles.signup__logo}>
                        <img src='logo.png'/>
                    </div>
                    <div className={styles.signup__title}>
                        Forgot password?
                    </div>
                    <div className={styles.reset__text}>
                        To start password reset process please enter the student ID given to you by University.
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='ID' value={login?.id} onChange={(e) => setLogin({...login, id: e.target.value})}/>
                    </div>
                    <div className={styles.reset__example}>
                        Example student number: 150101001
                    </div>
                    <div className={styles.signup__button} onClick={loginHandler}>
                        Continue
                    </div>
                    <div className={styles.signup__link}>
                        Back to <span onClick={goLoginHandler}>Login</span>
                    </div>
                </div>
            </Modal>  
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <Link href='/'>
                            <img src='logo.svg'/>
                        </Link>
                    </div>
                    <div className={styles.header__wrapper_nav}>
                        <div className={styles.header__wrapper_item}>
                            <Link href='/'>
                                Home
                            </Link>
                        </div>
                        <div className={styles.header__wrapper_item}>
                            About us
                        </div>
                        <div className={styles.header__wrapper_item}>
                            <Link href='/booking'>Booking</Link>
                        </div>
                        <div className={styles.header__wrapper_item}>
                            Extra services
                        </div>
                        <div className={styles.header__wrapper_item}>
                            Contact us
                        </div>
                        <div className={styles.header__wrapper_item}>
                            FAQ
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
                                <div className={styles.log__out} onClick={logoutHandler}>
                                    Log Out
                                </div>
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