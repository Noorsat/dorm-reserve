import {FC} from 'react';
import styles from './RateSelect.module.css';

const RateSelect : FC<any> = ({select, setSelect, setNextActive} : any) => {
    
    const optionsOpenHandler = () => {
        setSelect({...select,  open: !select.open})
    }

    const optionChooseHandler = (title: string) => {
        const answer = String(select?.title.split(" ")[1]).charAt(0).toUpperCase() + "" + String(select?.title.split(" ")[1]).substring(1) + " " + title;
        setSelect({...select, answer: answer, open: false})
        setNextActive(true);
    }

    return (
        <div className={styles.select}>
            <div className={styles.select__input} onClick={optionsOpenHandler}>
                <div className={`${styles.select__placeholder} ${select?.answer && styles.select__answer}`}>
                    {select?.answer || select?.title}
                </div> 
                <div className={styles.select__arrow}>
                    <img src='select.svg' />
                </div>
            </div>
            {
                select?.open && 
                 <div className={styles.select__options} style={{gridTemplateColumns: select?.options.length >= 5 ? 'repeat(5, 1fr)' : `repeat(${select?.options.length}, 1fr)`}}>
                 {
                     select?.options.map((option : any) => (
                         <div className={styles.select__option} onClick={() => optionChooseHandler(option?.title)}>
                             <div className={styles.select__option_checkbox} >
                                 <input type='checkbox' checked={select?.answer.split(" ")[1] == option?.title}/>
                             </div>
                             <div className={styles.select__option_title}>
                                 {option?.title}
                             </div>
                         </div>
                     ))
                 }
                 </div>
            }
           
        </div>
    )
}

export default RateSelect;