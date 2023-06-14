import {FC, useEffect, useState} from 'react';
import RateSelect from '../RateSelect/RateSelect';
import SelectionSelect from '../SelectionSelect/SelectionSelect';
import styles from './Rate.module.css';

const Rate : FC<any>  = ({setNextActive, info} : any) => {
    
    const [select, setSelect] = useState<any>(
        {
            title:"Choose rate",
            open: false,
            answer:"",
            options: [
                {
                    title: 'Breakfast'
                },
                {
                    title: 'Dinner'
                },
                {
                    title: 'Breakfast+Dinner'
                },
                {
                    title: 'without anything'
                }
            ],
        }   
    )

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


    return (
        <div className={styles.selection}>
            <div className={styles.selection__wrapper}>
                <div className={styles.selection__content}>
                    <div className={styles.selection__step}>
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
                        <div className={styles.total__items}>
                            <div className={styles.total__item}>
                                <ul className={styles.total__item_title}>
                                    <li>Bedroom</li>
                                </ul>
                                <div className={styles.total__item_text}>
                                    362000
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
                                <div className={styles.total__item_title}>
                                    Total Price:    
                                </div>
                                <div className={styles.total__item_text} style={{fontWeight:900}}>
                                    377000
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.selection__title}> 
                            Choose Rate: 
                        </div>
                        <RateSelect select={select} setSelect={setSelect} setNextActive={setNextActive}/> */}
                    </div>
                </div>
                <div className={styles.selection__map}>
                    <div className={styles.kaspi}>
                        <div className={styles.kaspi__instructions} style={{paddingLeft:16}}>
                            <div className={styles.kaspi__instruction}>
                                Payment instruction:
                            </div>
                            <div className={styles.kaspi__instruction}>
                                1. Open Kaspi.kz app in your smartphone
                            </div>
                            <div className={styles.kaspi__instruction}>
                                2. Go to "Платежи" 
                            </div>
                            <div className={styles.kaspi__instruction}>
                                3. Click to "Образование" 
                            </div>
                            <div className={styles.kaspi__instruction}>
                                4. Click to "Вузы и Колледжи" 
                            </div>
                            <div className={styles.kaspi__instruction}>
                                5. Fill out the form as shown in example:
                            </div>
                        </div>
                        <div className={styles.kaspi__image} style={{paddingRight:50}}>
                            <img src='kaspi.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rate;