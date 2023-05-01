import { FC } from 'react';
import styles from './News.module.css';

const News : FC = () => {
    return (
        <div className={styles.news}>
            <div className='container'>
                <div className={styles.news__wrapper}>
                    <div>
                        <div className={styles.news__header}>
                            <div>
                                <div className={styles.news__header_title}>
                                    LATEST NEWS
                                </div>
                                <div className={styles.news__header_text}>
                                    <div className={styles.news__header_text_content}>
                                        View all news
                                    </div>
                                    <div className={styles.news__header_text_icon}>
                                        <img src='arrow-right.svg'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.news__items}>
                            <div className={styles.news__item_1}>
                                <div className={styles.news__item_content}>
                                    <div className={styles.news__item_date}>
                                        May 20, 2022
                                    </div>
                                    <div className={styles.news__item_text}>
                                        KOFTE PARTY
                                    </div>
                                </div>
                            </div>
                            <div className={styles.news__item_2}>
                                <div className={styles.news__item_content}>
                                    <div className={styles.news__item_date}>
                                        August 28, 2022
                                    </div>
                                    <div className={styles.news__item_text}>
                                        ORIENTATION<br></br>DAY
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.news__header}>
                            <div>
                                <div className={styles.news__header_title}>
                                    UPCOMING EVENTS
                                </div>
                                <div className={styles.news__header_text}>
                                    <div className={styles.news__header_text_content}>
                                        View Calendar Events
                                    </div>
                                    <div className={styles.news__header_text_icon}>
                                        <img src='arrow-right.svg'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.news__items}>
                    <div className={styles.news__items_columns}>
                        <div className={styles.news__item_small_1}>
                            <div className={styles.news__item_content}> 
                                <div className={styles.news__item_date}>
                                    August 28, 2022
                                </div>
                                <div className={styles.news__item_text}>
                                    ORIENTATION<br></br>DAY
                                </div>
                            </div>
                        </div>
                        <div className={styles.news__item_small_2}>
                            <div className={styles.news__item_content}>
                                <div className={styles.news__item_date}>
                                    September 30,2022
                                </div>
                                <div className={styles.news__item_text}>
                                    SDU HERO
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;