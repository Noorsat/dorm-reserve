import styles from './Rooms.module.css';

const Rooms = () => {
    return (
        <div className={styles.rooms}>
            <div className='container'>
                <div className={styles.rooms__title}>
                    ROOMS
                </div>
                <div className={styles.rooms__items}>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-1.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Reception
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-2.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Canteen
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-3.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Lounge area
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-4.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Lounge area
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-5.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Reading room
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-6.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Lounge area
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-7.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Rooms
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-8.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Conference room
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-9.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Chees
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-10.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Tennis
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-11.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Volleyball area
                        </div>
                    </div>
                    <div className={styles.rooms__item}>
                        <div className={styles.rooms_item_img}>
                            <img src='rooms-12.png' />
                        </div>
                        <div className={styles.rooms_item_text}>
                            Basketball area
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms;