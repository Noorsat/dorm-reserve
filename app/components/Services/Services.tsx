import styles from './Services.module.css';

const Services = () => {
    return (
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
            </div>
        </div>
    )   
}

export default Services;