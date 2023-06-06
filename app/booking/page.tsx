"use client"

import {FC, useState} from 'react'
import BookingHeader from '../components/BookingHeader/BookingHeader';
import Rate from '../components/Rate/Rate';
import Selection from '../components/Selection/Selection';
import TotalPrice from '../components/TotalPrice/TotalPrice';
import styles from './Booking.module.css';
import {Modal} from 'antd';
import { IInfo } from './types';
import BookingStep from '../components/BookingStep/BookingStep';
import { useRouter } from 'next/navigation';
import Confirm from '../components/Confirm/Confirm';
import Header from '../components/Header/Header';

const Booking: FC = () => {
    const [nextActive, setNextActive] = useState<boolean>(false);
    const [bookingStep, setBookingStep] = useState<number>(1);
    const [totalModal, setTotalModal] = useState<boolean>(false);
    const [bookingModal, setBookingModal] = useState<boolean>(false);
    const [successModal, setSuccessModal] = useState<boolean>(false);

    const [info, setInfo] = useState<IInfo>()

    const router = useRouter()
    
    const getRoom = () => {
        const room = info && info?.block?.split(" ")[1] + info?.floor?.split(" ")[1] + info?.room?.split(" ")[1]
        return room;
    } 

    const getBed = () => {
        const bed = info?.bed?.split(" ")[1];
        return bed;
    }

    const nextHandler = () => {
        if (nextActive){
            if (bookingStep === 1 || bookingStep === 2){
                setBookingStep(bookingStep+1)
                setNextActive(false);
            }else if (bookingStep === 3){
                setNextActive(false);
                setTotalModal(true);
                setSuccessModal(true);
            }
        }
    }

    const totalYesHandler = () => {
        setTotalModal(false);
        setBookingStep(bookingStep+1);
        setNextActive(false)
    }

    const bookingYesHandler = () => {
        setBookingModal(false);
        setBookingStep(bookingStep+1);
        setSuccessModal(true);
        setNextActive(false);
    }

    const successCancelHandler = () => {
        router.push("/account")
    }

    return (
        <div>
            <Header />
            <Modal open={totalModal} footer={[]} className='bookingModal' onCancel={() => setTotalModal(false)}>
                <div className={styles.question__title}>
                    Are you sure, 
                    that you book 
                    for 325,000 KZT?
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
                    <div className={`${styles.question__button} ${styles.yes__button}`} onClick={totalYesHandler}>
                        <div className={styles.question__button_icon}>
                            <img src='yes.svg'/>
                        </div>
                        <div className={styles.question__button_text}>
                            Yes
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal open={bookingModal} footer={[]} className='bookingModal' onCancel={() => setBookingModal(false)}>
                <div className={styles.booking__modal_title}>
                    Are you sure, 
                    that you confirm payment?
                    Will be deducted from the balance
                    <br></br>-325000
                </div>
                <div className={styles.question__buttons}>
                    <div className={`${styles.question__button} ${styles.no__button}`} onClick={() => setBookingModal(false)}>
                        <div className={styles.question__button_icon}>
                            <img src='no.svg'/>
                        </div>
                        <div className={styles.question__button_text}>
                            No
                        </div>
                    </div>
                    <div className={`${styles.question__button} ${styles.yes__button}`} onClick={bookingYesHandler}>
                        <div className={styles.question__button_icon}>
                            <img src='yes.svg'/>
                        </div>
                        <div className={styles.question__button_text}>
                            Yes
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal open={successModal} footer={[]} className='bookingModal' onCancel={successCancelHandler}>
                <div className={styles.success__icon}>
                    <img src='success.png' />
                </div>
                <div className={styles.success__title}>
                    Congratulations!
                </div>
                <div className={styles.success__text}>
                    Your room is {getRoom()} - {getBed()}!
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
                                At this step, you can see the total price and payment instruction.
                            </div>
                            <Rate setNextActive={setNextActive} info={info} />
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
                                At this step, you have to attach all the necessary documents<br></br>
                                (this documents should be in original format, when you came to dormitory to sign the contract)
                            </div>
                            <TotalPrice setNextActive={setNextActive} info={info}/>
                            <div className={`${styles.next__button} ${nextActive && styles.active}`} onClick={nextHandler}>
                                <div className={styles.next__button_text}>
                                    CONFIRM
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