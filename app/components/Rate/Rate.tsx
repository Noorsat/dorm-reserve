import {FC, useState} from 'react';
import RateSelect from '../RateSelect/RateSelect';
import SelectionSelect from '../SelectionSelect/SelectionSelect';
import styles from './Rate.module.css';

const Rate : FC<any>  = ({setNextActive} : any) => {
    
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

    return (
        <div className={styles.selection}>
            <div className={styles.selection__wrapper}>
                <div className={styles.selection__content}>
                    <div className={styles.selection__step}>
                        <div className={styles.selection__title}> 
                            Choose Rate: 
                        </div>
                        <RateSelect select={select} setSelect={setSelect} setNextActive={setNextActive}/>
                    </div>
                </div>
                <div className={styles.selection__map}>
                    <div className={styles.rate__items}>
                        <div>
                            <div className={styles.rate__item}> 
                                breakfast
                            </div> 
                            <div className={styles.rate__item_title}>
                                50000
                            </div>
                        </div>
                        <div>
                            <div className={styles.rate__item}> 
                                dinner
                            </div> 
                            <div className={styles.rate__item_title}>
                                70000
                            </div>
                        </div>
                        <div>
                            <div className={styles.rate__item}> 
                                breakfast<br></br>+dinner
                            </div> 
                            <div className={styles.rate__item_title}>
                                100000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rate;