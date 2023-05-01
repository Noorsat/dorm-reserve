import { FC } from 'react';
import styles from './SelectionStepForth.module.css';

const SelectionStepForth : FC<any> = ({answer} : any) => {
    return (
        <div className={styles.selection__map}>
            <div className={styles.selection__door}>
                door
            </div>  
            <div className={styles.selection__items}>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '01' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          answer?.split(" ")[1] == '01' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={styles.selection__item_number}>
                        01
                    </div>
                </div>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '02' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          answer?.split(" ")[1] == '02' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={styles.selection__item_number}>
                        02
                    </div>
                </div>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '03' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          answer?.split(" ")[1] == '03' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={styles.selection__item_number}>
                        03
                    </div>
                </div>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '04' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          answer?.split(" ")[1] == '04' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={styles.selection__item_number}>
                        04
                    </div>
                </div>
            </div> 
            <div className={styles.selection__window}>
                window
            </div>
        </div>
    )
}

export default SelectionStepForth;