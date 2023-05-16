import { FC } from 'react';
import styles from './Confirm.module.css';
import { Upload } from 'antd';

const Confirm :FC<any> = ({setNextActive, info} : any) =>{
    return (
        <div className={styles.selection}>
        <div className={styles.selection__wrapper}>
            <div className={styles.selection__content}>
                <div className={styles.confirm__req}>
                    <div className={styles.confirm__requirement_title}>
                        List of required documents:
                    </div>
                    <ul className={styles.confirm__requirements}>
                        <li className={styles.confirm__requirement}> 
                            photo 3x4
                        </li>
                        <li className={styles.confirm__requirement}> 
                            identity card
                        </li>
                        <li className={styles.confirm__requirement}> 
                            payment receipt
                        </li>
                        <li className={styles.confirm__requirement}> 
                            medical form 086 or 075
                        </li>
                    </ul>
                </div>
                <div className={styles.confirm__inputs}>
                    <div className={styles.confirm__input}>
                        <div className={styles.confirm__input_label}>
                            Attach a photo(3x4):
                        </div>
                        <div className={styles.confirm__input_input}>
                            <Upload />
                        </div>
                    </div>
                    <div className={styles.confirm__input}>
                        <div className={styles.confirm__input_label}>
                            Attach a payment receipt:
                        </div>
                        <div className={styles.confirm__input_input}>
                            <input type='file' />
                        </div>
                    </div>
                    <div className={styles.confirm__input}>
                        <div className={styles.confirm__input_label}>
                            Attach a identity card:
                        </div>
                        <div className={styles.confirm__input_input}>
                            <input type='file' />
                        </div>
                    </div>
                    <div className={styles.confirm__input}>
                        <div className={styles.confirm__input_label}>
                            Attach a medical form:
                        </div>
                        <div className={styles.confirm__input_input}>
                            <input type='file' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.selection__map}>
                <div className={styles.confirm__items}>
                    <div className={styles.confirm__item}>
                        <ul className={styles.confirm__item_title}> 
                            <li>Bedroom</li>
                        </ul>
                        <div className={styles.confirm__item_value}>
                            260000
                        </div>
                    </div>
                    <div className={styles.confirm__item}>
                        <ul className={styles.confirm__item_title}> 
                            <li>Damage deposit (Fully refundable)</li>
                        </ul>
                        <div className={styles.confirm__item_value}>
                            15000
                        </div>
                    </div>
                    <div className={styles.confirm__item}>
                        <ul className={styles.confirm__item_title}> 
                            <li>Breakfast</li>
                        </ul>
                        <div className={styles.confirm__item_value}>
                            50000
                        </div>
                    </div>
                    <div className={styles.confirm__item}>
                        <div className={styles.confirm__item_title} style={{textAlign:'right'}}> 
                            Total Price:
                        </div>
                        <div className={styles.confirm__item_value}>
                            325000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Confirm;