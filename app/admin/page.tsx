"use client"

import {FC, useState, useEffect} from 'react';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import AdminTable from '../components/AdminTable/AdminTable';
import SupervisorDrawer from '../components/SupervisorDrawer/SupervisorDrawer';
import { getUser, getUsers } from '../http/auth';
import styles from './Admin.module.css';
import { useRouter } from 'next/navigation';
import { getBeds } from '../http/beds';

const Admin = () => {
    const [selectedTab, setSelectedTab] = useState();
    const [users, setUsers] = useState<any>();
    const [data, setData] = useState<any>(); 
    const [user, setUser] = useState<any>();

    const router = useRouter();

    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res.data);
        })
        const id = localStorage.getItem('id');
        getUser(id).then((res) => {
            if (res?.data?.role?.split("_")[1] != "ADMIN"){
                router.push("/")
            }
            setUser(res.data);
        })
    }, [])

    const getUsersAfter = async () => {
        await getUsers().then((r) => {
            if (selectedTab === "admins"){
                setData(r?.data?.filter(((user : any) => user?.role === "ROLE_ADMIN")))
            }else if (selectedTab === "beds"){
                getBeds().then((res) => {
                    setData(res?.data?.map((bed: any) => {
                        if (r?.data?.find((user : any) => user.bedId == bed.id)){
                            bed.user = r?.data?.filter((user: any) => user.bedId === bed.id)[0]?.email
                        }
                        return bed;
                    }))
                })
            }else{
                setUsers(r.data);
                setData(r.data?.filter(((user : any) => user?.role === "ROLE_USER")));
            }
        })
    }
    
    useEffect(() => {
        if (selectedTab === "admins"){
            setData(users?.filter(((user : any) => user?.role === "ROLE_ADMIN")))
        }else if (selectedTab === "beds"){
            getBeds().then((res) => {
                setData(res?.data?.map((bed: any) => {
                    if (users?.find((user : any) => user.bedId == bed.id)){
                        bed.user = users.filter((user: any) => user.bedId === bed.id)[0]?.email
                    }
                    return bed;
                }))
            })
        }else{
           setData(users?.filter(((user : any) => user?.role === "ROLE_USER")));
        }
    }, [selectedTab])

    return (
        <>
            <AdminHeader role={user?.role} />
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
                    selectedTab && 
                    <AdminTable 
                        users={data || []}
                        setData={setData}
                        setUsers={setUsers}
                        allUsers={users}
                        selectedTab={selectedTab}
                        getUsersAfter={getUsersAfter}
                    />
                }
            </div>
        </div>
        </>
    )
}

export default Admin;