import { notification } from 'antd';
import {FC} from 'react';
import styles from './SelectionSelect.module.css';

const SelectionSelect : FC<any> = ({select, setSelect, setCurrentStep, step, setNextActive, beds, info} : any) => {
   
    const roomId = info?.block?.split(" ")[1] + "-" + info?.floor?.split(" ")[1] + "" + info?.room?.split(" ")[1];

    const notFreeBeds = beds?.filter((bed : any)=> bed.id.includes(roomId));
    
    const checkBed = (bedNumber : number) => {
        return notFreeBeds && notFreeBeds?.some((bed : any ) => bed?.bedNumber === bedNumber);
    }  

    const optionsOpenHandler = () => {
        setSelect({...select,  open: !select.open})
    }

    const optionChooseHandler = (title: string) => {
        if (step === 4 && checkBed(Number(title))){
            notification["error"]({
                message:"This bed already taken!"
            })
        }else{
            const answer = String(select?.title.split(" ")[1]).charAt(0).toUpperCase() + "" + String(select?.title.split(" ")[1]).substring(1) + " " + title;
            setSelect({...select, answer: answer, open: false})
            setCurrentStep(step);
            setNextActive && setNextActive(true);
        }

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

export default SelectionSelect;