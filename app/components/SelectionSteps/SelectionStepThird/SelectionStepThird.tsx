import {FC} from 'react';
import styles from './SelectionStepThird.module.css';

const SelectionStepThird  : FC<any> = ({answer} : any) => {
    return (
        <div className={styles.selection__map}>
            <div className={styles.selection__wrapper}>
                <div className={`${styles.selection__rooms_hor} ${styles.selection__rooms_first}`}>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '11' && styles.active}`}>
                        11
                    </div>  
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '12' && styles.active}`}>
                        12
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '13' && styles.active}`}>
                        13
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '14' && styles.active}`}>
                        14
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '15' && styles.active}`}>
                        15
                    </div>          
                </div>
                <div className={styles.selection__plan}>
                    <div className={styles.selection__door}>
                        door
                    </div>    
                    <div className={styles.selection__circle}>
                        SDU
                    </div>
                    <div className={styles.selection__door2}>
                        door
                    </div>
                </div>
                <div className={`${styles.selection__rooms_ver} ${styles.selection__rooms_second}`}>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '16' && styles.active}`}>
                        16
                    </div>  
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '17' && styles.active}`}>
                        17
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '18' && styles.active}`}>
                        18
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '19' && styles.active}`}>
                        19
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '20' && styles.active}`}>
                        20
                    </div> 
                </div>
                <div className={`${styles.selection__rooms_ver} ${styles.selection__rooms_third}`}>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '10' && styles.active}`}>
                        10
                    </div>  
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '09' && styles.active}`}>
                        09
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '08' && styles.active}`}>
                        08
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '07' && styles.active}`}>
                        07
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '06' && styles.active}`}>
                        06
                    </div> 
                </div>
                <div className={`${styles.selection__rooms_hor} ${styles.selection__rooms_forth}`}>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '05' && styles.active}`}>
                        05
                    </div>  
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '04' && styles.active}`}>
                        04
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '03' && styles.active}`}>
                        03
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '02' && styles.active}`}>
                        02
                    </div>
                    <div className={`${styles.selection__room} ${answer.split(" ")[1] == '01' && styles.active}`}>
                        01
                    </div> 
                </div>
            </div>
        </div>
    )    
}

export default SelectionStepThird;