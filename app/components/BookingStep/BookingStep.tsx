import {FC, useEffect} from 'react';
import styles from './BookingStep.module.css';
import Countdown from 'react-countdown';

const BookingStep : FC<any> = ({setNextActive, info}: any) => {

    useEffect(() => {
        setNextActive(true)
    }, [])

    const getRoom = () => {
        const room = info?.block.split(" ")[1] + info?.floor.split(" ")[1] + info?.room.split(" ")[1]
        return room;
    } 

    const getBed = () => {
        const bed = info?.bed.split(" ")[1];
        return bed;
    }

    const renderer = ({ hours, minutes, seconds } : any) => {
        return <span>{minutes} min : {seconds} sec</span>;
      };

    return (
        <div className={styles.selection}>
            <div className={styles.selection__wrapper}>
                <div className={styles.selection__content}>
                    <div className={styles.total__items}>
                        <div className={styles.total__item}>
                            <ul className={styles.total__item_title}>
                                <li>Bedroom</li>
                            </ul>
                            <div className={styles.total__item_text}>
                                260000
                            </div>
                        </div>
                        <div className={styles.total__item}>
                            <ul className={styles.total__item_title}>
                                <li>Damage deposit (Fully refundable)</li>
                            </ul>
                            <div className={styles.total__item_text}>
                                15000
                            </div>
                        </div>
                        <div className={styles.total__item}>
                            <ul className={styles.total__item_title}>
                                <li>Breakfast</li>
                            </ul>
                            <div className={styles.total__item_text}>
                                50000
                            </div>
                        </div>
                        <div className={styles.total__item}>
                            <div className={styles.total__item_title}>
                                Total Price:    
                            </div>
                            <div className={styles.total__item_text}>
                                325000
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.selection__map}>
                    <div>
                        <div className={styles.total__info}>
                            <div className={styles.total__bed}>
                                <img src='bed.svg'/>
                            </div>
                            <div>
                                <div className={styles.room__info}>
                                    <div className={styles.room__info_title}>
                                        Room
                                    </div>
                                    <div className={styles.room__info_text}>
                                        {getRoom()}
                                    </div>
                                </div>
                                <div className={styles.room__info}>
                                    <div className={styles.room__info_title}>
                                        Bed 
                                    </div>
                                    <div className={styles.room__info_text}>
                                        {getBed()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.time__left}>
                            <div className={styles.time__left_title}>
                                Until the end of your reservation left:
                            </div>
                            <div className={styles.time__left_t}>
                                <Countdown
                                    date={Date.now() + 1800000}
                                    renderer={renderer}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingStep;