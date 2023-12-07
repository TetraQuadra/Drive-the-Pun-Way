import React from 'react'
import styles from './CloseButton.module.css';
import { ReactComponent as Cross } from 'images/icons/cross.svg';

function CloseButton({ className, ...props }) {
    return (
        <button className={`${styles.button} ${className}`} {...props}><Cross className={styles.cross} /></button>
    )
}

export default CloseButton