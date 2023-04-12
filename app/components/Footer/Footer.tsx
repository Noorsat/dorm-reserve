import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className={styles.footer__wrapper}>
                    <div>
                        <div className={styles.footer__title}>
                            Phone:
                        </div>
                        <div className={styles.footer__title}>
                            +7 (727) 307 95 65
                        </div>
                        <div className={styles.footer__title}>
                            Email:
                        </div>
                        <div className={styles.footer__title}>
                            sdudorm@sdu.edu.kz
                        </div>
                        <div className={styles.footer__title}>
                            Address:
                        </div>
                        <div className={styles.footer__title}>
                            1/1 Abylai Khan Street, Kaskelen, Kazakhstan
                        </div>
                        <div className={styles.footer__c}>
                            © 2023 All rights reserved
                        </div>
                    </div>
                    <div className={styles.footer__form}>
                        <div className={styles.footer__form_title}>
                            Write an error:
                        </div>
                        <div className={styles.footer__form_input_error}>
                            <input type="text" placeholder='An error*' />
                        </div>
                        <div className={styles.footer__form_input_link}>
                            <input type="text" placeholder='Link of the site, that you found the error*' />
                        </div>
                        <div className={styles.footer__form_button}>
                            Send
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;