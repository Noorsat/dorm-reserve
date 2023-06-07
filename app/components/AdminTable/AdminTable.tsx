import {FC, useState} from 'react';
import styles from './AdminTable.module.css'; 
import {Checkbox, Modal} from 'antd';
import Select from '../Select/Select';

const AdminTable : FC<any> = ({users} : any) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [selectedUsers, setSelectedUsers] = useState<any>([]);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [addModal, setAddModal] = useState<boolean>(false);
    const [changes, setChanges] = useState<boolean>(false);
    const [selects, setSelects] = useState<any>([
        {
            title: 'Faculty',
            options: [
                {
                    title:'Business School',
                    text: 'BS'
                },
                {
                    title:'Engineering and Natural Sciences',
                    text: 'ENS'
                },
                {
                    title:'Education an Humanities',
                    text: 'EH'
                },
                {
                    title:'Law and Social Sciences',
                    text: 'LSS'
                },
            ],
            open: false,
            answer:'',
            large: true
        },
        {
            title: 'Course',
            options: [
                {
                    title:'1',
                },
                {
                    title:'2',
                },
                {
                    title:'3',
                },
                {
                    title:'4',
                },
            ],
            open: false,
            answer:''
        },
        {
            title: 'Gender',
            options: [
                {
                    title:'Female',
                    text: 'F'
                },
                {
                    title:'Male',
                    text: 'M'
                },
            ],
            open: false,
            answer:''
        }
    ]);
    const [user, setUser] = useState({
        id: '',
        name: '',
        surname:'',
        email:'',
        phone:''    
    });


    const editModeHandler = () => {
        setEditMode(true);
    }

    const userSelectHandler = (index : number) => {
        let user = users[index];
        
        if (selectedUsers?.find((u : any) => u?.id == user?.id)){
            setSelectedUsers(selectedUsers.filter((u : any) => u?.id != user?.id));
        }else{
            setSelectedUsers([...selectedUsers, user])
        }
    }

    const deleteHandler = () => {
        if (selectedUsers.length > 0) {
            setDeleteModal(true);
        }
    }

    const addHandler = () => {
        setAddModal(true);
    }

    const usersDeletHandler = () => {
        setDeleteModal(false);
        setChanges(true);
        setSelectedUsers([]);
    }

    const saveHandler = () => {
        if (changes){
            setChanges(false);
            setEditMode(false);
        }
    }

    const validate = () => {
        if (user?.id?.length > 0 && user?.name?.length > 0 && user?.surname?.length > 0 && user?.phone?.length > 0 && user?.email?.length > 0 && selects[0]?.answer?.length > 0 && selects[1]?.answer?.length > 0 && selects[2]?.answer?.length > 0){
            return true;
        }else{
            return false;
        }
    }

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

    const userAddHandler = () => {
        if (validate() === true){
            setAddModal(false);
            setUser({
                id: '',
                name: '',
                surname:'',
                email:'',
                phone:''    
            });
            setSelects(selects?.map((select: any) => {
                select.answer = '';
                return select;
            }))
        }
    }

    return (
        <div className={styles.wrapper}>
            <Modal open={deleteModal} footer={[]} className='deleteModal' onCancel={() => setDeleteModal(false)}>
                <div className={styles.delete__title}>
                    Are you sure to delete?
                </div>
                <div className={styles.delete__buttons}>
                    <div className={styles.delete__button} onClick={() => setDeleteModal(false)}>
                        <div className={styles.delete__button_icon}>
                            <img src='cancel.svg'/>
                        </div>
                        <div className={styles.delete__button_text}>
                            No
                        </div>
                    </div>
                    <div className={styles.delete__button} onClick={usersDeletHandler}>
                        <div className={styles.delete__button_icon}>
                            <img src='succes.svg'/>
                        </div>
                        <div className={styles.delete__button_text}>
                            Yes
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal open={addModal} footer={[]} className='addModal' onCancel={() => setAddModal(false)}>
                <div className={styles.add__title}>
                    Adding New Student
                </div>
                <div className={styles.signup__input}>
                    <input placeholder='Student ID' value={user?.id} onChange={(e) => setUser({...user, id: e.target.value})} />
                </div>фзз
                <div className={styles.signup__input}>
                    <input placeholder='Firstname' value={user?.name} onChange={(e) => setUser({...user, name:  e.target.value})} />
                </div>
                <div className={styles.signup__input}>
                    <input placeholder='Lastname' value={user?.surname} onChange={(e) => setUser({...user, surname: e.target.value})}/>
                </div>
                <div className={styles.signup__input}>
                    <input placeholder='Email' value={user?.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                </div>
                <div className={styles.signup__input}>
                    <input placeholder='Phone' value={user?.phone} onChange={(e) => setUser({...user, phone: e.target.value})}/>
                </div>
                <div className={styles.signup__input_selects}>
                    {
                        selects?.map((item : any, index: number) => (
                            <Select data={item} selects={selects} onChange={setSelects} number={index}/>
                        ))
                    } 
                </div>
                <div className={`${styles.add__button} ${validate() === true && styles.active}`} onClick={userAddHandler}>
                    ADD
                </div>
            </Modal>
            <div className={styles.header}>
                 <div className={styles.input}>
                    <input placeholder='Search student'/>
                </div>
                <div className={styles.buttons}>
                    {
                        editMode ? 
                        <>
                            <div className={`${styles.button} ${addModal && styles.active}`} onClick={addHandler}>
                                ADD
                            </div>
                            <div className={`${styles.button} ${selectedUsers?.length > 0 && styles.active}`} onClick={deleteHandler}>
                                DELETE
                            </div>
                        </>
                        :
                        <div className={styles.button} onClick={editModeHandler}>
                            Edit
                        </div>
                    }
                    
                </div>
            </div>
            <div className={styles.table__wrapper}>
            {
                editMode &&
                <div className={styles.checkboxs}>
                    {
                        users?.map((user: any, index: number) => (
                            <div className={styles.checkbox} key={index} onClick={() => userSelectHandler(index)}>
                                <Checkbox style={{fontSize:20}} checked={selectedUsers?.find((u :any) => u.id === user.id)}></Checkbox>
                            </div>
                        ))
                    }
                </div>
            }
            <table className={styles.table}>
                <tr>
                    <td>
                        №
                    </td>
                    <td>
                        ID
                    </td>
                    <td>
                        First Name
                    </td>
                    <td>
                        Last Name
                    </td>
                    <td>
                        Email
                    </td>
                    <td>
                        Phone
                    </td>
                    <td>
                        Faculty
                    </td>
                    <td>
                        Course
                    </td>
                    <td>
                        Gender
                    </td>
                    <td>
                        Balance
                    </td>
                    <td>
                        Place
                    </td>
                </tr>
                {
                    users?.map((user: any, index: number) => (
                        <tr>
                            <td> 
                                <div className={`styles.table__text`}>
                                    {index+1}
                                </div>
                            </td>    
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.id}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.firstname}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.lastname}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.email}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.phone}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {getProgram(user?.program)}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.course}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.gender}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}> 
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.balance || 0}
                                </div>
                            </td>
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.bed}
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </div>
            <div className={`${styles.save__button} ${changes && styles.active}`} onClick={saveHandler}>
                SAVE
            </div>
        </div>
    )
}

export default AdminTable;