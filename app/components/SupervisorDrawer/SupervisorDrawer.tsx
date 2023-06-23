import {FC} from 'react';
import styles from './SupervisorDrawer.module.css';

const SupervisorDrawer : FC<any> = ({setSelectedTab} : any) => {
    return (
        <div className={styles.drawer}>
            <div className={styles.drawer__avatar}>
                <img src='acc.svg' />
            </div>
            <div className={styles.drawer__role}>
                Supervisor
            </div>
            <div className={styles.drawer__items}> 
                <div className={styles.drawer__item} onClick={() => setSelectedTab('students')}>
                    Students List
                </div>
                <div className={styles.drawer__item} onClick={() => setSelectedTab('beds')}>
                    Manage Place
                </div>
                <div className={styles.drawer__item} onClick={() => setSelectedTab('admins')}>
                    Manage Staff
                </div>
            </div>
        </div>
    )
}

export default SupervisorDrawer;