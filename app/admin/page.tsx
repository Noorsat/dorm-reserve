"use client"

import {FC, useState, useEffect} from 'react';
import AdminTable from '../components/AdminTable/AdminTable';
import Header from '../components/Header/Header';
import SupervisorDrawer from '../components/SupervisorDrawer/SupervisorDrawer';
import { getUsers } from '../http/auth';
import styles from './Admin.module.css';

const Admin = () => {
    const [selectedTab, setSelectedTab] = useState();
    const [users, setUsers] = useState<any>();

    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res.data);
        })
    }, [])

    return (
        <>
            <Header />
            <div className={styles.admin}>
            <div className={styles.admin__wrapper}>
                <SupervisorDrawer setSelectedTab={setSelectedTab} />
                {
                    !selectedTab && <div className={styles.admin__content}>
                        <div className={styles.admin__title}>
                            Welcome to Supervisors page!
                        </div>
                        <div className={styles.admin__text}>
                            Below you can see the actions available to you:
                        </div>
                        <div className={styles.admin__items}>
                            <ul>
                                <li>
                                    check students list
                                </li>
                                <li>
                                    edit students info
                                </li>
                                <li>
                                    manage place(add, delete room, bed)
                                </li>
                                <li>
                                    manage staff(add,delete admins,accountant)
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                {
                    selectedTab && <AdminTable users={users || []} />
                }
            </div>
        </div>
        </>
    )
}

export default Admin;