"use client"; 

import React, { FC, useEffect, useState } from 'react'
import styles from './Header.module.css';
import {Modal, notification} from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Select from '../Select/Select';
import { useRouter } from 'next/navigation';
import { createUser, getUsers, tryLogin } from '@/app/http/auth';
import * as Scroll from 'react-scroll';
import parse from 'html-react-parser';


const Header: FC<any> = ({loginModal, setLoginModal} : any) => {
    const [signupModal, setSignupModal] = useState<boolean>(false);
    const [resetPasswordModal, setResetPasswordModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>();
    const [faqModal, setFaqModal] = useState<boolean>();
    const [priceModal, setPriceModal] = useState<boolean>(false);
    const [faqData, setFaqData] = useState<any>(
        [
            {
                question: 'How can I apply for dormitory registration?',
                answer: '- To apply for registration in a dormitory, you need to register on this site, indicating all the necessary data.',
                isOpen: false
            },
            {
                question: 'What documents do I need to provide at the dormitory?',
                answer: `- You may be required to provide the following documents: 
                <br>4 photos 3х4 
                <br>Copy of medical report 075 (obtainable from any Kazakh clinic) 
                <br>Copy of identity card 
                <br>Copy of payment receipt
                `,
                html: true,
                isOpen: false
            },
            {
                question: 'What are the living conditions in the dormitory?',
                answer: '- The dormitory is equipped with the necessary furniture and household appliances, as well as cleaning and laundry services. If desired, for an additional fee, the services of a gym, an aerobics room and a trainer are provided.',
                isOpen: false
            },
            {
                question: 'Can I stay in the dormitory during holidays?',
                answer: '- Usually, during the holidays, the dormitories of the university are completely closed, so students cannot live in the dormitory during the holidays. However, in some cases it is possible to obtain permission to live in a dormitory during the holidays, for example, if the student is engaged in scientific research or other academic projects.',
                isOpen: false
            },
            {
                question: 'How often is the dormitory cleaned?',
                answer: '- The dormitory is cleaned regularly. Usually, cleaning is carried out every day by the staff of the dormitory.',
                isOpen: false
            },
            {
                question: 'Can I live in a dormitory with a friend?',
                answer: '- This request is not considered by the dormitory. However, after registration, you can make a booking together with a friend and choose one room to stay, subject to availability.',
                isOpen: false
            },
            {
                question: 'How can I pay for accommodation in a dormitory?',
                answer: '- Payment for accommodation in the dormitory is carried out through a bank transfer. ',
                isOpen: false
            },
            {
                question: 'How can I contact the dormitory administration if I have any problems?',
                answer: '- To contact the dormitory administration, you can use the contact details listed on the university website, or contact the dormitory reception.',
                isOpen: false
            },
        ]
    )
    let ScrollLink = Scroll.Link;
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
                window.localStorage.setItem("logged", "ok");
                localStorage.setItem("email", login.username);
                getUsers().then((res) => {
                    let user = res.data.filter((item : any)  => item?.email === login?.username)[0];
                    localStorage.setItem("id", user?.id)
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
        setIsLogin(false);
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
                localStorage.setItem('email', signup?.email);
                getUsers().then((res) => {
                    let user = res.data.filter((item : any)  => item?.email === signup?.email)[0];
                    localStorage.setItem("id", user?.id)
                })
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

    const faqSwitchHandler = (index : number) => {
        const isOpen = faqData?.filter((item : any, i : number) => index == i)[0]?.isOpen;
        if (isOpen){
            setFaqData(faqData.map((faq : any, i : number) => {
                if (i === index){
                    faq.isOpen = false;
                }
                return faq;
            }))
        }else{
            setFaqData(faqData.map((faq : any, i : number) => {
                if (i === index){
                    faq.isOpen = true;
                }else{
                    faq.isOpen = false;
                }
                return faq;
            }))
        }
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
            <Modal open={faqModal} width={786} className="faqModal" onCancel={() => setFaqModal(false)} footer={[]}>
                <div className={styles.faq__title}>
                    Frequently Asked Questions:
                </div>
                <div className={styles.faq__items}>
                    {
                        faqData?.map((faq : any, index: number) => (
                            <div className={styles.faq__item}>
                                <div className={styles.faq__item_wrapper} onClick={() => faqSwitchHandler(index)}>
                                    <div className={styles.faq__item_title}>
                                        {faq?.question}
                                    </div>
                                    <div className={styles.faq__item_icon}>
                                        <img src={faq?.isOpen ? 'faq-arrow.svg' : 'faq-plus.svg'} />
                                    </div>
                                </div>
                                {
                                    faq?.isOpen && (
                                        <div className={`${styles.faq__item_text} ${faq?.isOpen ? styles.faq__item_text_active : ''}`}>
                                            {parse(faq?.answer)}
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
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
                        Forgot your username or password?
                    </div>
                    <div className={styles.signup__button} onClick={loginHandler}>
                        Login
                    </div>
                    <div className={styles.signup__link}>
                        Don't have an account yet? <span onClick={signupOpenHandler}>Sign Up</span>
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
            <Modal open={priceModal} width={800} className="priceModal" onCancel={() => setPriceModal(false)} footer={[]}>
            <div className={styles.services__wrapper}>
                <div className={styles.services__wrapper_left}>
                    <div className={styles.services__title}>
                        ANNUAL STUDENT RESIDENCE FEE:
                        <br></br>360 000 T (for 1 year)
                    </div>
                    <div className={styles.services__arrows}>
                        <img src="arrows.svg"/>
                    </div>
                    <div className={styles.services__semesters}>
                        <div className={styles.services__semester}>
                            1st semester - 180 000 T
                            (Payment must be 
                            made by August 25th.)
                        </div>
                        <div className={styles.services__semester}>
                            2nd semester - 180 000 T
                            (Payment must be 
                            made by January 1st.)
                        </div>
                    </div>
                </div>
                <div className={styles.services__wrapper_right}>
                    <div className={styles.services__title}>
                        REQUISITES
                    </div>
                    <div className={styles.services__requisites}>
                        <div className={styles.services__requisite}>
                            ЖШС "DORM SERVICE"
                        </div>
                        <div className={styles.services__requisite}>
                            Мекен-жай: 040900, Алматы обл.,<br></br>Қаскелең қаласы,<br></br>Абылай хан көш. 1/1
                        </div>
                        <div className={styles.services__requisite}>
                            БИН: 110440021346
                        </div>
                        <div className={styles.services__requisite}>
                            IBAN: KZ626017131000016522
                        </div>
                        <div className={styles.services__requisite}>
                            БИК: HSBKKZKX КБе 17, КНП 872<br></br>"Халық Банк Қазақстан" АҚ
                        </div>
                    </div>
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
                            <ScrollLink to="aboutus" spy={true} smooth={true} offset={-100} duration={500} style={{cursor:"pointer"}}>
                                About us
                            </ScrollLink>
                        </div>
                        <div className={styles.header__wrapper_item}>
                            <Link href='/booking'>Booking</Link>
                        </div>
                        <div className={styles.header__wrapper_item}>
                            <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500} style={{cursor:"pointer"}}>
                                Contact us
                            </ScrollLink>
                        </div>
                        <div className={styles.header__wrapper_item} onClick={() => setFaqModal(true)}>
                            FAQ
                        </div>
                        <div className={styles.header__wrapper_item} onClick={() => setPriceModal(true)}>
                            Price
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