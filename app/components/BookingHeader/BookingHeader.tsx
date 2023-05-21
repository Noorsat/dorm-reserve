import { Dekko } from 'next/font/google';
import styles from './BookingHeader.module.css';

const BookingHeader = ({bookingStep} : any) => {
    console.log(bookingStep)
    return (
        <div className={styles.booking__header}>
            <div className='container'>
                <div className={styles.booking__items}>
                    <div className={`${styles.booking__item} ${bookingStep === 1 && styles.active} ${bookingStep > 1  && styles.passed}`}>
                        <div className={`${styles.booking__item_title}`}>
                            Your Selection
                        </div>
                        {
                            bookingStep > 1 && 
                            <img src='confirm.svg' className={styles.booking__item_icon} />
                        }
                    </div>
                    <div className={`${styles.booking__item} ${styles.booking__item_shape} ${bookingStep === 2 && styles.active} ${bookingStep > 2  && styles.passed}`}>
                        <div className={styles.booking__item_title}>
                            Total Price
                        </div>
                        {
                            bookingStep > 2 && 
                            <img src='confirm.svg' className={styles.booking__item_icon} />
                        }
                    </div>
                    <div className={`${styles.booking__item} ${styles.booking__item_shape} ${styles.booking__step_2} ${bookingStep === 3 && styles.active} ${bookingStep > 3 && styles.passed}`}>
                        <div className={styles.booking__item_title}>
                            Attach Documents
                        </div>
                        {
                            bookingStep > 3 && 
                            <img src='confirm.svg' className={styles.booking__item_icon} />
                        }
                    </div>
                    <div className={`${styles.booking__item} ${styles.booking__item_shape} ${styles.booking__step_4} ${bookingStep === 4 && styles.active} ${bookingStep > 4  && styles.passed}` }>
                        <div className={styles.booking__item_title}>
                            Confirm
                        </div>
                        {
                            bookingStep > 4 && 
                            <img src='confirm.svg' className={styles.booking__item_icon} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingHeader;