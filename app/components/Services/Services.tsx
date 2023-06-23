import styles from './Services.module.css';
import * as Scroll from 'react-scroll';
import {Aleo} from 'next/font/google';

const aleo = Aleo({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const Services = () => {
    let Element   = Scroll.Element;
      
    return (
        <Element name='aboutus'>
            <div className={aleo.className}>
            <div className={styles.services}>
                <div className='container'>
                    <div className={styles.services__items}>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-1.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                                Rooms for<br></br> 4 people
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-2.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                                Daily hot<br></br> meal
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-3.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                            24 hour<br></br>security
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-4.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                                Free Wi-Fi
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-5.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                                Daily cleaning <br></br>service
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-6.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                                Hairdresser
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-7.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                                Laundry
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <div className={styles.services__item_img}>
                                <img src='services-8.svg'/>
                            </div>
                            <div className={styles.services__item_text}>
                            24 hour medical <br></br>service
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.services__wrapper}>
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
                    </div> */}
                </div> 
            </div>
            </div>
        </Element>
    )   
}

export default Services;