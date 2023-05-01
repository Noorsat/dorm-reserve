import { FC } from 'react';
import styles from './Select.module.css';

const Select = ({data, selects, onChange, number} : any) => {
    const optionsOpenHandler = () => {
        onChange(selects?.map((select : any, index: number) => {
            if (index === number){
                select.open = !select.open;
            }else{
                select.open = false;
            }
            return select;
        }))
    }

    const optionSelectHandler = (title : string) => {
        onChange(selects?.map((select: any, index: number) => {
            if (index === number){
                select.answer = title;
                select.open = false;
            }
            return select;
        }))
    }

    return (
        <div className={styles.select}>
            <div className={styles.select__title} onClick={optionsOpenHandler}>
                <div className={data?.answer ? styles.select__answer : styles.select__placeholder}>
                    {data?.answer || data?.title}
                </div>
                <div className={styles.select__arrow}>
                    <img src='select.svg'/>
                </div>
            </div>
            {
                data?.open && <div className={styles.options} style={{width: data?.large && 350 }}>
                 {
                     data?.options?.map((item : any) => (
                         <div className={styles.option} onClick={() => optionSelectHandler(item?.text || item?.title)}>
                             <div className={styles.option__title}>
                                 {item?.title}
                             </div>
                             <div className={styles.option__text}>
                                 {item?.text}
                             </div>
                         </div>
                     ))
                 }
             </div>
            }
           
        </div>
    )
}  

export default Select;