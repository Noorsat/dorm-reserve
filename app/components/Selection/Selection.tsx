"use client"; 

import {FC, useEffect, useState} from 'react';
import SelectionSelect from '../SelectionSelect/SelectionSelect';
import SelectionStepFirst from '../SelectionSteps/SelectionStepFirst/SelectionStepFirst';
import SelectionStepForth from '../SelectionSteps/SelectionStepForth/SelectionStepForth';
import SelectionStepSecond from '../SelectionSteps/SelectionStepSecond/SelectionStepSecond';
import SelectionStepThird from '../SelectionSteps/SelectionStepThird/SelectionStepThird';
import styles from './Selection.module.css';

const Selection: FC<any> = ({setNextActive, setInfo, info}: any) => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const [firstStep, setFirstStep] = useState<any>(
        {
            title:"Choose block",
            open: false,
            answer:"",
            options: [
                {
                    title: 'B'
                },
                {
                    title: 'A'
                }
            ],
        }   
    )

    const [secondStep, setSecondStep] = useState<any>(
        {
            title:"Choose floor",
            open: false,
            answer:"",
            options: [
                {
                    title: '2'
                },
                {
                    title: '3'
                },
                {
                    title: '4'
                },
                {
                    title: '5'
                }
            ]
        }  
    )

    const [thirdStep, setThirdStep] = useState<any>(
        {
            title:"Choose room",
            open: false,
            answer:"",
            options: [
                {
                    title: '01'
                },
                {
                    title: '02'
                },
                {
                    title: '03'
                },
                {
                    title: '04'
                },
                {
                    title: '05'
                },
                {
                    title: '06'
                },
                {
                    title: '07'
                },
                {
                    title: '08'
                },
                {
                    title: '09'
                },
                {
                    title: '10'
                },
                {
                    title: '11'
                },
                {
                    title: '12'
                },
                {
                    title: '13'
                },
                {
                    title: '14'
                },
                {
                    title: '15'
                },
                {
                    title: '16'
                },
                {
                    title: '17'
                },
                {
                    title: '18'
                },
                {
                    title: '19'
                },
                {
                    title: '20'
                }
            ]
        }  
    )

    const [forthStep, setForthStep] = useState<any>(
        {
            title:"Choose bed",
            open: false,
            answer:"",
            options: [
                {
                    title: '01'
                },
                {
                    title: '02'
                },
                {
                    title: '03'
                },
                {
                    title: '04'
                }
            ]
        }  
    )

    useEffect(() => {
        if (firstStep.answer){ 
            setInfo({...info, block: firstStep.answer})
        }
        if (secondStep.answer){
            setInfo({...info, floor: secondStep.answer})
        }
        if (thirdStep.answer){
            setInfo({...info, room: thirdStep.answer})
        }
        if (forthStep.answer){
            setInfo({...info, bed: forthStep.answer})
        }
    }, [firstStep, secondStep, thirdStep, forthStep])

    const getSelectionMap = () => {
        switch (currentStep){
            case 1 : return <SelectionStepFirst />
            break;
            case 2: return <SelectionStepSecond />
            break;
            case 3: return <SelectionStepThird answer={thirdStep?.answer}/>
            break;
            case 4: return <SelectionStepForth answer={forthStep?.answer}/>
            break;
        }
    }


    return (
        <div className={styles.selection}>
            <div className={styles.selection__wrapper}>
                <div className={styles.selection__content}>
                    {
                        currentStep >= 1 &&
                        <div className={styles.selection__step}>
                            <div className={styles.selection__title}> 
                                Select Block:
                            </div>
                            <SelectionSelect select={firstStep} setSelect={setFirstStep} setCurrentStep={setCurrentStep} step={2} />
                        </div>
                    }
                    {
                        currentStep >= 2 &&
                        <div className={styles.selection__step}>
                            <div className={styles.selection__title}> 
                                Select Floor:
                            </div>
                            <SelectionSelect select={secondStep} setSelect={setSecondStep} setCurrentStep={setCurrentStep} step={3} />
                        </div>
                    }
                    {
                        currentStep >= 3 &&
                        <div className={styles.selection__step}>
                            <div className={styles.selection__title}> 
                                Select Room:
                            </div>
                            <SelectionSelect select={thirdStep} setSelect={setThirdStep} setCurrentStep={setCurrentStep} step={4} />
                        </div>
                    }
                    {
                        currentStep >= 4 &&
                        <div className={styles.selection__step}>
                            <div className={styles.selection__title}> 
                                Select Bed:
                            </div>
                            <SelectionSelect select={forthStep} setSelect={setForthStep} setCurrentStep={setCurrentStep} step={4} setNextActive={setNextActive} />
                        </div>
                    }
                </div>
                <div className={styles.selection__map}>
                    <div className={styles.selection__map_title}>
                        Kaskelen
                    </div>
                    <div className={styles.selection__map_mid}>
                        {getSelectionMap()}
                        <div className={styles.selection__map_street} style={{width:'1%'}}>
                            Trassa Tashkent-Almaty
                        </div>
                    </div>
                    <div className={styles.selection__map_footer}>
                        SDU
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selection;