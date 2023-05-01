import { FC } from 'react'; 
import styles from './SelectionStepSecond.module.css';

const SelectionStepSecond = () => {
    return (
        <div className={styles.selection__map}>
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
        </div>
    )
}

export default SelectionStepSecond;