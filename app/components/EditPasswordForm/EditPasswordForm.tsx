import styles from './EditPasswordForm.module.css';

const EditPasswordForm = () => {
    return (
        <div className={styles.form}>
            <div className={styles.form__title}>
                Change Password
            </div>
            <div className={styles.form__items}>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Current Password:
                    </div>
                    <div className={styles.form__item_input}>
                        <input type='password' />
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        New Password: 
                    </div>
                    <div className={styles.form__item_input}>
                        <input type='password' />
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Confirm Password:         
                    </div>
                    <div className={styles.form__item_input}>
                        <input type='password' />
                    </div>
                </div>
            </div>
            <div className={styles.form__button}>
                Update Password
            </div>
        </div>
    )  
}

export default EditPasswordForm;