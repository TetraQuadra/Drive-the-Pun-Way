import React from 'react'
import styles from './LoadMoreButton.module.css'

function LoadMoreButton({ callbackFuntion }) {
    return (
        <button className={styles.button} onClick={callbackFuntion}>
            Load More
        </button>
    )
}

export default LoadMoreButton