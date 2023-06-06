import EditPasswordForm from '../components/EditPasswordForm/EditPasswordForm';
import Header from '../components/Header/Header';
import ProfileEditForm from '../components/ProfileEditForm/ProfileEditForm';
import styles from './Account.module.css';

const Account = () => {
    return (
        <>
            <Header />
         <div className={styles.account}>
            <div className='container'>
                <div className={styles.account__header}>
                    <div className={styles.account__header_img}>
                        <img src='account__logo.svg' />
                    </div>
                    <div className={styles.account__header_text}>
                        Aimukhanbetova Inabat
                    </div>
                </div>
                <div className={styles.items}>
                    <ProfileEditForm />
                    <EditPasswordForm />
                </div>
   
            </div>
        </div>
        </>
    )
}

export default Account;