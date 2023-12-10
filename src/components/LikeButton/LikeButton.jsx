import React, { useState } from 'react'
import styles from './LikeButton.module.css'
import { ReactComponent as HeartNormal } from 'images/icons/heart-normal.svg';
import { ReactComponent as HeartActive } from 'images/icons/heart-active.svg';

function LikeButton({ buttonState, callbackFunction, className }) {

    return (
        <button className={`${styles.button} ${className}`} onClick={() => callbackFunction()}>
            {
                buttonState ? <HeartActive /> : <HeartNormal />
            }
        </button>
    )
}

export default LikeButton