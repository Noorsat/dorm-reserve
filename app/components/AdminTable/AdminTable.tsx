import {FC, useState} from 'react';
import styles from './AdminTable.module.css'; 
import {Checkbox, Modal, notification, Select as ASelect} from 'antd';
import Select from '../Select/Select';
import { createUser, createUserByAdmin, deleteUser, getUsers } from '@/app/http/auth';
import { getColumn } from './utils';
import SelectionSelect from '../SelectionSelect/SelectionSelect';
import { createBed, registerUserToBed } from '@/app/http/beds';

const AdminTable : FC<any> = ({users, setData, setUsers, allUsers, selectedTab, getUsersAfter} : any) => {
    console.log(users)
    const [editMode, setEditMode] = useState<boolean>(false);
    const [selectedUsers, setSelectedUsers] = useState<any>([]);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [addModal, setAddModal] = useState<boolean>(false);
    const [bedCreateModal, setBedCreateModal] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<boolean>(false);
    const [selectUserModal, setSelectUserModal] = useState<boolean>(false);
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
    const [firstStep, setFirstStep] = useState<any>(
        {
            title:"Choose block",
            open: false,
            answer:"",
            options: [
                {
                    title: 'B'
                },
                {
                    title: 'A'
                }
            ],
        }   
    )

    const [secondStep, setSecondStep] = useState<any>(
        {
            title:"Choose floor",
            open: false,
            answer:"",
            options: [
                {
                    title: '2'
                },
                {
                    title: '3'
                },
                {
                    title: '4'
                },
                {
                    title: '5'
                }
            ]
        }  
    )

    const [thirdStep, setThirdStep] = useState<any>(
        {
            title:"Choose room",
            open: false,
            answer:"",
            options: [
                {
                    title: '01'
                },
                {
                    title: '02'
                },
                {
                    title: '03'
                },
                {
                    title: '04'
                },
                {
                    title: '05'
                },
                {
                    title: '06'
                },
                {
                    title: '07'
                },
                {
                    title: '08'
                },
                {
                    title: '09'
                },
                {
                    title: '10'
                },
                {
                    title: '11'
                },
                {
                    title: '12'
                },
                {
                    title: '13'
                },
                {
                    title: '14'
                },
                {
                    title: '15'
                },
                {
                    title: '16'
                },
                {
                    title: '17'
                },
                {
                    title: '18'
                },
                {
                    title: '19'
                },
                {
                    title: '20'
                }
            ]
        }  
    )

    const [forthStep, setForthStep] = useState<any>(
        {
            title:"Choose bed",
            open: false,
            answer:"",
            options: [
                {
                    title: '01'
                },
                {
                    title: '02'
                },
                {
                    title: '03'
                },
                {
                    title: '04'
                }
            ]
        }  
    )
    const [user, setUser] = useState({
        studentId: '',
        firstname: '',
        lastname:'',
        email:'',
        phone:''    
    });

    const editModeHandler = () => {
        setEditMode(true);
    }

    const userSelectHandler = (index : number) => {
        let user = users[index];

        if (selectedTab === 'admins' || selectedTab === 'students'){
            if (selectedUsers?.find((u : any) => u?.id == user?.id)){
                setSelectedUsers(selectedUsers.filter((u : any) => u?.id != user?.id));
            }else{
                setSelectedUsers([...selectedUsers, user])
            }
        }else{
            if (selectedUsers?.find((u : any) => u?.id == user?.id)){
                setSelectedUsers(selectedUsers.filter((u : any) => u?.id != user?.id));
            }else{
                setSelectedUsers([user])
            }
        }  
    }

    const deleteHandler = () => {
        if (selectedUsers.length > 0) {
            setDeleteModal(true);
        }else {
            notification["warning"]({
                message: "You need select any checkbox"
            })
        }
    }

    const addHandler = () => {
        setAddModal(true);
    }

    const setSelectUserModalHandler = () => {
        if (selectedUsers.length > 0){
            setSelectUserModal(true);
        }else {
            notification["warning"]({
                message: "You need select any checkbox"
            })
        }
    }

    const usersDeletHandler = async () => {
        let count = 0;

        selectedUsers?.map(async (user : any) => {
            count++;
            await deleteUser(user?.id).then(() => {
                getUsersAfter();
            })
        })

        if (count === selectedUsers?.length){
            notification["success"]({
                message:"Succesfully deleted users"
            })
            setDeleteModal(false);
            setChanges(true);
            setSelectedUsers([]);
        }
    }

    const saveHandler = () => {
        setChanges(false);
        setEditMode(false);
    }
    
    const validate = () => {
        if (user?.studentId?.length > 0 && user?.firstname?.length > 0 && user?.lastname?.length > 0 && user?.phone?.length > 0 && user?.email?.length > 0 && selects[0]?.answer?.length > 0 && selects[1]?.answer?.length > 0 && selects[2]?.answer?.length > 0){
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
            const body = {
                ...user, program: selects[0]?.answer, course: selects[1]?.answer, userGender: selects[2]?.answer === 'M' ? 'USER_MALE' : 'USER_FEMALE', password: 'qwerty123' 
            }
            if (selectedTab === "students"){
                createUser(body).then((res) => {
                    if (res.status === 200){
                        setAddModal(false);
                        setUser({
                            studentId: '',
                            firstname: '',
                            lastname:'',
                            email:'',
                            phone:''    
                        });
                        setSelects(selects?.map((select: any) => {
                            select.answer = '';
                            return select;
                        }))
                        getUsers().then((res: { data: any; }) => {
                            getUsersAfter()
                            notification["success"]({
                                message:"User create succesfully"
                            })
                        })
                    }
                }).catch((res) => {
                    notification["error"]({
                        message:"Create User Error"
                    })
                })
            }else if (selectedTab === "admins"){
                createUserByAdmin({...body, userRole: "ROLE_ADMIN"}).then((res) => {
                    if (res.status === 200){
                        setAddModal(false);
                        setUser({
                            studentId: '',
                            firstname: '',
                            lastname:'',
                            email:'',
                            phone:''    
                        });
                        setSelects(selects?.map((select: any) => {
                            select.answer = '';
                            return select;
                        }))
                        getUsers().then((res) => {
                            getUsersAfter()
                            notification["success"]({
                                message:"User create succesfully"
                            })
                        })
                    }
                }).catch((res) => {
                    notification["error"]({
                        message:"Create User Error"
                    })
                })
            }
        }
    }

    const createBedHandler = () => {
        if (firstStep.answer && secondStep.answer && thirdStep.answer && forthStep.answer){
            const body = {
                bedNumber: Number(forthStep?.answer?.split(" ")[1]),
                roomId: Number(secondStep?.answer?.split(" ")[1] + thirdStep?.answer?.split(" ")[1]),
                price: 300000.0,
                currency: 'tng',
                status: 'available',
                floor: Number(secondStep?.answer?.split(" ")[1]),
                block: firstStep?.answer?.split(" ")[1]
            }

            createBed(body).then((res) => {
                if (res.status === 200){
                    setBedCreateModal(false);
                    notification["success"]({
                        message: "You succesfully created bed"
                    })
                    getUsersAfter();
                }
            }).catch((res) => {
                notification["error"]({
                    message: res.response.data
                })
            })
        }else{
            notification["error"]({
                message: "Fill all inputs"
            })
        }
    }

    const bedSelectUserHandler = () => {
        registerUserToBed(selectedUser, selectedUsers[0]?.id).then((res) => {
            if (res.status === 200){
                notification["success"]({
                    message: "Your succesfully register user to bed"                    
                })
                setSelectUserModal(false);
                setSelectedUsers([])
                setEditMode(false);
                getUsersAfter();
            }
        }).catch((res) => {
            notification["error"]({
                message:"Error register user to bed"
            })
        })
    }

    const searchStudentHandler = (e : string, type: string) => {
        if (e.length === 0){
            getUsersAfter();
        }else{
            setData(allUsers?.filter((user: any) => user?.studentId.includes(e) && user?.role === type));
        }
    }
 
    return (
        <div className={styles.wrapper}>
            <Modal open={bedCreateModal} footer={[]} className='addModal' onCancel={() => setBedCreateModal(false)}>
                <div className={styles.add__title}>
                    Adding new Bed
                </div>
                <div className={styles.create__bed_item}>
                     <SelectionSelect select={firstStep} setSelect={setFirstStep} type="admin"/>
                </div>
                <div className={styles.create__bed_item}>
                     <SelectionSelect select={secondStep} setSelect={setSecondStep} type="admin"/>
                </div>
                <div className={styles.create__bed_item}>
                     <SelectionSelect select={thirdStep} setSelect={setThirdStep} type="admin"/>
                </div>
                <div className={styles.create__bed_item}>
                     <SelectionSelect select={forthStep} setSelect={setForthStep} type="admin"/>
                </div>
                <div className={`${styles.add__button} ${validate() === true && styles.active}`} onClick={createBedHandler}>
                    Create Bed
                </div>
            </Modal>
            <Modal open={selectUserModal} footer={[]} className='addModal' onCancel={() => setSelectUserModal(false)}>
                <div className={styles.add__title}>
                    Change Bed Owner
                </div>
                <div style={{marginBottom: 24 }}>
                    <ASelect
                        placeholder='Choose user'
                        style={{width: "100%"}}
                        options={allUsers?.map((user : any) => {
                            return {
                                value: user?.id,
                                label: user?.email
                            }
                        })} 
                        value={selectedUser}
                        onChange={(value) => setSelectedUser(value)}
                    />
                </div>
                <div className={`${styles.add__button} ${validate() === true && styles.active}`} onClick={bedSelectUserHandler}>
                    Change
                </div>
            </Modal>
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
                    Adding New { selectedTab === "admins" ? "Admin" : "Student" }
                </div>
                <div className={styles.signup__input}>
                    <input placeholder='Student ID' value={user?.studentId} onChange={(e) => setUser({...user, studentId: e.target.value})} />
                </div>
                <div className={styles.signup__input}>
                    <input placeholder='Firstname' value={user?.firstname} onChange={(e) => setUser({...user, firstname:  e.target.value})} />
                </div>
                <div className={styles.signup__input}>
                    <input placeholder='Lastname' value={user?.lastname} onChange={(e) => setUser({...user, lastname: e.target.value})}/>
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
            {
                (selectedTab === "students" || selectedTab === "admins") ?
                <div className={styles.header}>
                    <div className={styles.input}>
                        <input placeholder='Search student' onChange={(e) => searchStudentHandler(e.target.value,  selectedTab === "students" ? "ROLE_USER" : "ROLE_ADMIN")} />
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
                </div> :
                <div className={styles.header}>
                    <div className={styles.buttons}>
                        {
                            editMode ? 
                            <>
                                <div className={`${styles.button} ${addModal && styles.active}`} onClick={() =>  setBedCreateModal(true)}>
                                    Create Bed
                                </div>
                                <div className={`${styles.button} ${selectedUsers?.length > 0 && styles.active}`} onClick={setSelectUserModalHandler}>
                                    Change bed owner
                                </div>
                            </>
                            :
                            <div className={styles.button} onClick={editModeHandler}>
                                Edit
                            </div>
                        }
                    </div>
                </div>  
            }
           
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
                    {getColumn(selectedTab)?.map((column : any) => (
                        <td>
                            {column?.column}
                        </td>
                    ))
                    }
                </tr>
                {
                    users && users?.map((user: any, index: number) => (
                        <tr>
                            {
                            (selectedTab === "students" || selectedTab === "admins") && (
                                    <>
                                    <td> 
                                        <div className={`styles.table__text`}>
                                            {index+1}
                                        </div>
                                    </td>    
                            <td className={`${editMode && styles.td__active}`}>
                                <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                    {user?.studentId}
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
                            </>
                                )
                            }
                            {
                                selectedTab === "beds" && (
                                    <>
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
                                                {user?.block}
                                            </div>
                                        </td>
                                        <td className={`${editMode && styles.td__active}`}>
                                            <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                                {user?.floor}
                                            </div>
                                        </td>
                                        <td className={`${editMode && styles.td__active}`}>
                                            <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                                {user?.roomId}
                                            </div>
                                        </td>
                                        <td className={`${editMode && styles.td__active}`}>
                                            <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                                {user?.bedNumber}
                                            </div>
                                        </td><td className={`${editMode && styles.td__active}`}>
                                            <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                                {user?.price} {user?.currency}
                                            </div>
                                        </td>
                                        <td className={`${editMode && styles.td__active}`}>
                                            <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                                {user?.status}
                                            </div>
                                        </td>
                                        <td className={`${editMode && styles.td__active}`}>
                                            <div className={`${styles.table__text} ${editMode && styles.active}`}>
                                                {user?.user}
                                            </div>
                                        </td>
                                    </>
                                )
                            }
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