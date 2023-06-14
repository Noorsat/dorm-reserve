import { FC } from 'react';
import styles from './SelectionStepForth.module.css';

const SelectionStepForth : FC<any> = ({answer, beds, info} : any) => {

    const roomId = info?.block?.split(" ")[1] + "-" + info?.floor?.split(" ")[1] + "" + info?.room?.split(" ")[1];

    const notFreeBeds = beds?.filter((bed : any)=> bed.id.includes(roomId));

    const checkBed = (bedNumber : number) => {
        return notFreeBeds && notFreeBeds?.some((bed : any ) => bed?.bedNumber === bedNumber);
    }  

    return (
        <div className={styles.selection__map}>
            <div className={styles.selection__door}>
                door
            </div>  
            <div className={styles.selection__items}>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '01' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          checkBed(1) ? <img src="bed-red.svg" /> : 
                          answer?.split(" ")[1] == '01' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={`${styles.selection__item_number} ${checkBed(1) ? styles.notFree : ''}`}>
                        01
                    </div>
                </div>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '02' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          checkBed(2) ? <img src="bed-red.svg" /> : 
                          answer?.split(" ")[1] == '02' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={`${styles.selection__item_number} ${checkBed(2) ? styles.notFree : ''}`}>
                        02
                    </div>
                </div>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '03' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          checkBed(3) ? <img src="bed-red.svg" /> : 
                          answer?.split(" ")[1] == '03' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={`${styles.selection__item_number} ${checkBed(3) ? styles.notFree : ''}`}>
                        03
                    </div>
                </div>
                <div className={`${styles.selection__item} ${answer?.split(" ")[1] == '04' && styles.active}`}>
                    <div className={styles.selection__item_img}>
                        {
                          checkBed(4) ? <img src="bed-red.svg" /> : 
                          answer?.split(" ")[1] == '04' ? <img src='bed-blue.svg' />  : <img src='bed.svg' /> 
                        }
                    </div>
                    <div className={`${styles.selection__item_number} ${checkBed(4) ? styles.notFree : ''}`}>
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