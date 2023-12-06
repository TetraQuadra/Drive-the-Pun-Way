import React, { useState } from 'react'
import styles from './LikeButton.module.css'
import { ReactComponent as HeartNormal } from 'images/icons/heart-normal.svg';
import { ReactComponent as HeartActive } from 'images/icons/heart-active.svg';

function LikeButton({ buttonState, callbackFunction }) {
    const [isActive, setIsActive] = useState(buttonState)

    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <button className={styles.button} onClick={handleClick}>
            {
                isActive ? <HeartActive /> : <HeartNormal />
            }
        </button>
    )
}

export default LikeButton