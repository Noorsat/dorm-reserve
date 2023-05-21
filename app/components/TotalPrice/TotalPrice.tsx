import {FC, useEffect, useState}from 'react';
import styles from './TotalPrice.module.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import type { UploadProps } from 'antd';

const TotalPrice : FC<any> = ({setNextActive, info}: any) => {
    const [firstDocument, setFirstDocument] = useState();
    const [secondDocument, setSecondDocument] = useState();
    const [thirdDocument, setThirdDocument] = useState();
    const [forthDocument, setForthDocument] = useState();

    useEffect(() => {  
        if (firstDocument && secondDocument && thirdDocument && forthDocument){
            setNextActive(true);
        }
    }, [firstDocument, secondDocument, thirdDocument, forthDocument])

    const fileSubmitHandler = (info : any, type : string) => {
        console.log(info);
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            if (type === 'firstDocument'){
                setFirstDocument(info.file.originFileObj)
            }else if (type === 'secondDocument'){
                setSecondDocument(info.file.originFileObj)
            }else if (type === 'thirdDocument'){
                setThirdDocument(info.file.originFileObj)
            }else if (type === 'forthDocument'){
                setForthDocument(info.file.originFileObj)
            }
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
    }

    const dummyRequest = ({ file , onSuccess  } : any) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
      };

    return (
        <div className={styles.selection}>
            <div className={styles.selection__wrapper}>
                <div className={styles.selection__content}>
                    <div className={styles.confirm__req}>
                        <div className={styles.confirm__requirement_title}>
                            List of required documents:
                        </div>
                        <ul className={styles.confirm__requirements}>
                            <li className={styles.confirm__requirement}> 
                                photo 3x4
                            </li>
                            <li className={styles.confirm__requirement}> 
                                identity card
                            </li>
                            <li className={styles.confirm__requirement}> 
                                payment receipt
                            </li>
                            <li className={styles.confirm__requirement}> 
                                medical form 086 or 075
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.selection__map}>
                    <div className={styles.confirm__inputs}>
                        <div className={styles.confirm__input}>
                            <div className={styles.confirm__input_label}>
                                Attach a photo(3x4):
                            </div>
                            <div className={styles.confirm__input_input}>
                                <Upload customRequest={dummyRequest}  onChange={(info) => fileSubmitHandler(info, 'firstDocument')}>
                                    <Button icon={<UploadOutlined />}>Upload a file</Button>
                                </Upload>
                            </div>
                        </div>
                        <div className={styles.confirm__input}>
                            <div className={styles.confirm__input_label}>
                                Attach a payment receipt:
                            </div>
                            <div className={styles.confirm__input_input}>
                                <Upload customRequest={dummyRequest} onChange={(info) => fileSubmitHandler(info, 'secondDocument')}>   
                                    <Button icon={<UploadOutlined />}>Upload a file</Button>
                                </Upload>
                            </div>
                        </div>
                        <div className={styles.confirm__input}>
                            <div className={styles.confirm__input_label}>
                                Attach a identity card:
                            </div>
                            <div className={styles.confirm__input_input}>
                                <Upload customRequest={dummyRequest} onChange={(info) => fileSubmitHandler(info, 'thirdDocument')}>
                                    <Button icon={<UploadOutlined />}>Upload a file</Button>
                                </Upload>
                            </div>
                        </div>
                        <div className={styles.confirm__input}>
                            <div className={styles.confirm__input_label}>
                                Attach a medical form:
                            </div>
                            <div className={styles.confirm__input_input}>
                                <Upload customRequest={dummyRequest} onChange={(info) => fileSubmitHandler(info, 'forthDocument')}>
                                    <Button icon={<UploadOutlined />}>Upload a file</Button>
                                </Upload>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalPrice;