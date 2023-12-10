import React from 'react';
import styles from './Homepage.module.css';
import LinkCustom from 'components/LinkCustom/LinkCustom';

function Homepage() {
    return (
        <>
            <section className={` ${styles.hero}`}>
                <div className={styles.headerWrapper}>
                    <h1>Your Journey Starts Here</h1>
                    <p>
                        ShiftGears is your trusted partner for convenient and reliable car rentals. Our mission is to make
                        your journey enjoyable and stress-free.
                    </p>
                    <LinkCustom className={styles.startLink} to={'/catalog'}>Start</LinkCustom>
                </div>
            </section>
        </>
    );
}

export default Homepage;