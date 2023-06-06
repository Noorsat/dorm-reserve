"use client"; 

import React, { FC, useEffect, useState } from 'react'
import styles from './Header.module.css';
import {Modal, notification} from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Select from '../Select/Select';
import { useRouter } from 'next/navigation';
import { sign } from 'crypto';
import { createUser, tryLogin } from '@/app/http/auth';
import { getBeds } from '@/app/http/beds';
import { responsiveArray } from 'antd/es/_util/responsiveObserver';

const Header: FC<any> = ({loginModal, setLoginModal} : any) => {
    const [signupModal, setSignupModal] = useState<boolean>(false);
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
    const [langOpen, setLangOpen] = useState<boolean>(false);
    const [lang, setLang] = useState<string>('EN');
    const [signup, setSignup] = useState({
        studentId: '',
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

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
    }, [pathname])

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
        if (!(login.username && login.password)){
            notification["error"]({
                message: "Fill in all the fields"
            })
        }

        tryLogin(login).then((res) => {
            if (res.status === 200){
                notification["success"]({
                    message:"You successfully logged into your account"
                })
                setIsLogin(true);
                setLoginModal(false);
                setLogin({
                    username: "",
                    password: ""
                })
            }
        }).catch((res) => {
            notification["error"]({
                message: res.response.data
            })
        })
    }

    const logoutHandler = () => {
        localStorage.removeItem("logged");
        window.location.reload();
    }

    const langOpenHandler = () => {
        setLangOpen(!langOpen);
    }

    const langChangeHandler = (lang : string) => {
        setLang(lang);
        setLangOpen(false);
    }

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>, type: string) => {
        const inputValue = event.target.value;
        if (type === 'studentId'){
            const numericValue = inputValue.replace(/\D/g, '');
            setSignup({...signup, studentId: numericValue});
        }else if (type === 'phone'){
            const formattedPhoneNumber = formatPhoneNumber(inputValue);
            setSignup({...signup, phone: formattedPhoneNumber});
        }else{
            setSignup({...signup, [type]: inputValue})
        }
    };

    const loginInputChange = (event : React.ChangeEvent<HTMLInputElement>, type: string) => {
        const inputValue = event.target.value;
        setLogin({...login, [type] : inputValue})
    };

    const formatPhoneNumber = (phoneNumber : string) => {
        // Remove all non-numeric characters from the input
        const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

        const formattedNumber = numericPhoneNumber.replace(
          /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/,
          '+$1 ($2) $3 $4 $5'
        );

        return formattedNumber;
    };

    const loginCloseHandler = () => {
        setLoginModal(false);
        setLogin({
            username:'',
            password: ''
        })
    }

    const signupCloseHandler = () => {
        setSignupModal(false);
        setSignup({...signup, password:'', confirmPassword:''})
    }

    const signupHandler = () => {
        if (!(signup.studentId && signup.firstname && signup.lastname && signup.email && signup.phone && signup.password && signup.confirmPassword && selects[0].answer && selects[1].answer && selects[2].answer)){
            return notification["error"]({
                message: "Fill in all the fields"
            })
        } 
        if (signup?.password != signup?.confirmPassword){
            return notification["error"]({
                message: "Two passwords not same"
            })
        }
        
        let body =  { ...signup, program: selects[0]?.answer, course: selects[1]?.answer, userGender: "USER"+(selects[2]?.answer)?.toUpperCase()};

        createUser(body).then((res) => {
            if (res.status === 200){
                notification["success"]({
                    message: "You have successfully created an account"
                })
                setIsLogin(true);
                setSignupModal(false);
                localStorage.setItem('logged', 'ok');
                setSignup({
                    studentId: '',
                    firstname: '',
                    lastname: '',
                    phone: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            }
        }).catch((res) => {
            console.log(res.response.data.includes("email taken"))
            if (res.response.data.includes("email taken")){
                notification["error"]({
                    message: "This email is used"
                })
            }
        })
    }
    

    return (
        <div className={styles.header}>
            <Modal open={signupModal} width={582} onCancel={signupCloseHandler} footer={[]}>
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
                        <input placeholder='Student ID' maxLength={9} onChange={(e) => handleInputChange(e, 'studentId')} value={signup?.studentId} />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Firstname' onChange={(e) => handleInputChange(e, "firstname")} value={signup?.firstname} />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Lastname' onChange={(e) => handleInputChange(e, "lastname")} value={signup?.lastname} />
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Email' onChange={(e) => handleInputChange(e, "email")} value={signup?.email}/>
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Phone' maxLength={11} onChange={(e) => handleInputChange(e, 'phone')} value={signup?.phone}/>
                    </div>
                    <div className={styles.signup__input_selects}>
                        {
                            selects?.map((item : any, index: number) => (
                                <Select data={item} selects={selects} onChange={setSelects} number={index}/>
                            ))
                        } 
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Create your password' type='password' value={signup?.password} onChange={(e) => setSignup({...signup, password: e.target.value})}/>
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Confirm your password' type='password' value={signup?.confirmPassword} onChange={(e) => setSignup({...signup, confirmPassword: e.target.value})} />
                    </div>
                    <div className={styles.signup__button} onClick={signupHandler}>
                        Sign Up
                    </div>
                    <div className={styles.signup__link}>
                        Already have an account? <span onClick={loginOpenHandler}>Login</span>
                    </div>
                </div>
            </Modal>
            <Modal open={loginModal} width={582} onCancel={loginCloseHandler} footer={[]}>
                <div className={styles.signup__wrapper}>
                    <div className={styles.signup__logo}>
                        <img src='logo.png'/>
                    </div>
                    <div className={styles.signup__title}>
                        Login
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Email' value={login?.username} onChange={(e) => loginInputChange(e, 'username')}/>
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Password' type='password' value={login?.password} onChange={(e) => loginInputChange(e, 'password')} />
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
                        To start password reset process please enter the email given to you by University.
                    </div>
                    <div className={styles.signup__input}>
                        <input placeholder='Email' value={login?.username} onChange={(e) => setLogin({...login, username: e.target.value})}/>
                    </div>
                    <div className={styles.reset__example}>
                        Example: 150101001@stu.sdu.edu.kz
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
                        <div>
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