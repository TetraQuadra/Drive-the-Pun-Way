import React from 'react'
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <p>2023 Kyiv, Shift Gearl co.</p>
            </div>
        </footer>
    )
}

export default Footer