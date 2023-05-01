"use client"

import {FC, useState} from 'react'
import BookingHeader from '../components/BookingHeader/BookingHeader';
import Rate from '../components/Rate/Rate';
import Selection from '../components/Selection/Selection';
import TotalPrice from '../components/TotalPrice/TotalPrice';
import styles from './Booking.module.css';
import {Modal} from 'antd';
import { IInfo } from './types';

const Booking: FC = () => {
    const [nextActive, setNextActive] = useState<boolean>(false);
    const [bookingStep, setBookingStep] = useState<number>(1);
    const [totalModal, setTotalModal] = useState<boolean>(false);

    const [info, setInfo] = useState<IInfo>()

    const nextHandler = () => {
        if (nextActive){
            if (bookingStep === 1 || bookingStep === 2){
                setBookingStep(bookingStep+1)
                setNextActive(false);
            }else if (bookingStep === 3){
                setTotalModal(true);
            }
            
        }
    }

    return (
        <div>
            <Modal open={totalModal} footer={[]} className='bookingModal' onCancel={() => setTotalModal(false)}>
                <div className={styles.question__title}>
                    Are you sure, 
                    that you book 
                    for 215,000 KZT?
                </div>
                <div className={styles.question__buttons}>
                    <div className={`${styles.question__button} ${styles.no__button}`} onClick={() => setTotalModal(false)}>
                        <div className={styles.question__button_icon}>
                            <img src='no.svg'/>
                        </div>
                        <div className={styles.question__button_text}>
                            No
                        </div>
                    </div>
                    <div className={`${styles.question__button} ${styles.yes__button}`} onClick={() => setTotalModal(false)}>
                        <div className={styles.question__button_icon}>
                            <img src='yes.svg'/>
                        </div>
                        <div className={styles.question__button_text}>
                            Yes
                        </div>
                    </div>
                </div>
            </Modal>
            <BookingHeader bookingStep={bookingStep}/>
            <div className={styles.booking}>
                <div className='container'>
                    {
                        bookingStep === 1 && <div className={styles.booking__wrapper}>
                            <div className={styles.booking__tip}>
                                In order to book a room, you must go through these steps:<br>
                                </br>
                                Select block → Select Floor  → Select Room  → Select Bed
                            </div>
                            <Selection setNextActive={setNextActive} setInfo={setInfo} info={info}/>
                            <div className={`${styles.next__button} ${nextActive && styles.active}`} onClick={nextHandler}>
                                <div className={styles.next__button_text}>
                                    NEXT
                                </div>
                                <div className={styles.next__button_img}>
                                    <img src='arrrow-right.svg' />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        bookingStep === 2 && 
                        <div className={styles.booking__wrapper}>
                            <div className={styles.booking__tip}>
                                At this step, you must choose the Rate(Tariff) that suits you.(remember, that all rates are for 1 semester)
                            </div>
                            <Rate setNextActive={setNextActive} setBookingStep={setBookingStep} />
                            <div className={`${styles.next__button} ${nextActive && styles.active}`} onClick={nextHandler}>
                                <div className={styles.next__button_text}>
                                    NEXT
                                </div>
                                <div className={styles.next__button_img}>
                                    <img src='arrrow-right.svg' />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        bookingStep === 3 && 
                        <div className={styles.booking__wrapper}>
                            <div className={styles.booking__tip}>
                                At this step, you can see the total price of your booking.
                            </div>
                            <TotalPrice setNextActive={setNextActive} info={info}/>
                            <div className={`${styles.next__button} ${nextActive && styles.active}`} onClick={nextHandler}>
                                <div className={styles.next__button_text}>
                                    NEXT
                                </div>
                                <div className={styles.next__button_img}>
                                    <img src='arrrow-right.svg' />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )   
}

export default Booking;