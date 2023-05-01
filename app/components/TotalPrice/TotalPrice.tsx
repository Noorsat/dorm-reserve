import {FC, useEffect} from 'react';
import styles from './TotalPrice.module.css';

const TotalPrice : FC<any> = ({setNextActive, info}: any) => {

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

    console.log(info)

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

                            </div>
                        </div>
                        <div className={styles.total__item}>
                            <ul className={styles.total__item_title}>
                                <li>Damage deposit (Fully refundable)</li>
                            </ul>
                            <div className={styles.total__item_text}>

                            </div>
                        </div>
                        <div className={styles.total__item}>
                            <ul className={styles.total__item_title}>
                                <li>Breakfast</li>
                            </ul>
                            <div className={styles.total__item_text}>

                            </div>
                        </div>
                        <div className={styles.total__item}>
                            <div className={styles.total__item_title}>
                                Total Price:    
                            </div>
                            <div className={styles.total__item_text}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.selection__map}>
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
                </div>
            </div>
        </div>
    )
}

export default TotalPrice;