"use client"

import { useEffect, useState } from 'react';
import EditPasswordForm from '../components/EditPasswordForm/EditPasswordForm';
import Header from '../components/Header/Header';
import ProfileEditForm from '../components/ProfileEditForm/ProfileEditForm';
import { getUser, getUsers } from '../http/auth';
import styles from './Account.module.css';

const Account = () => {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        const email = localStorage.getItem("email");

        email &&
        getUsers().then((res) => {
            let id = res?.data?.filter((item : any) => item.email == email)[0].id;
            
            getUser(id).then((res) => {
                setUser(res.data);
            })
        })
    }, [])


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
                        {user?.firstname} {user?.lastname}
                    </div>
                </div>
                <div className={styles.items}>
                    <ProfileEditForm user={user}/>
                    <EditPasswordForm />
                </div>
   
            </div>
        </div>
        </>
    )
}

export default Account;