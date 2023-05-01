import styles from './ProfileEditForm.module.css'

const ProfileEditForm = () => {
    return (
        <div className={styles.form}>
            <div className={styles.form__title}>
                User Details
            </div>
            <div className={styles.form__items}>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        ID:
                    </div>
                    <div className={styles.form__item_input}>
                        190103477
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Email Address:  
                    </div>
                    <div className={styles.form__item_input}>
                        190103477@sdu.stu.edu.kz
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Phone Number:         
                    </div>
                    <div className={styles.form__item_input}>
                        +77472952998
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Birth Date:         
                    </div>
                    <div className={styles.form__item_input}>
                        13.01.2002
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Course, specialty:     
                    </div>
                    <div className={styles.form__item_input}>
                        4th, Information Systems
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Balance:      
                    </div>
                    <div className={styles.form__item_input}>
                        0 T
                    </div>
                </div>
            </div>
            <div className={styles.form__button}>
                Edit profile
            </div>
        </div>
    )
}

export default ProfileEditForm;