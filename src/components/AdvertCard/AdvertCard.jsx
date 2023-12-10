import React from 'react'
import styles from './AdvertCard.module.css';

function AdvertCard({ advert }) {
    return (
        <div className={styles.adverCard}>
            <div>image</div>
            <div>title,    price</div>
            <div>city, country, rental comp, type, brand, id, 1 of funtionalites</div>
            <div>button learn more</div>
            <div>like</div>
        </div>
    )
}

export default AdvertCard