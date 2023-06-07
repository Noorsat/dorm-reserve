import styles from './ProfileEditForm.module.css'

const ProfileEditForm = ({user} : any) => {

    const getProgram = (program : string) => {
        if (program == 'BS'){
            return "Business School";
        }else if (program === "ENS"){
            return "Engineering and Natural Sciences"
        }else if (program === "EH"){
            return "Education an Humanities"
        }else if (program === "LSS"){
            return "Law and Social Sciences";
        }
    }

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
                        {user?.id}
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Email Address:  
                    </div>
                    <div className={styles.form__item_input}>
                        {user?.username}
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Phone Number:         
                    </div>
                    <div className={styles.form__item_input}>
                        {user?.phone}
                    </div>
                </div>
                {/* <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Birth Date:         
                    </div>
                    <div className={styles.form__item_input}>
                        13.01.2002
                    </div>
                </div> */}
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Course, specialty:     
                    </div>
                    <div className={styles.form__item_input}>
                        {user?.course} Course, {getProgram(user?.program)}
                    </div>
                </div>
                <div className={styles.form__item}>
                    <div className={styles.form__item_text}>
                        Balance:      
                    </div>
                    <div className={styles.form__item_input}>
                        {user?.balance || 0} T
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