import AdvertCard from 'components/AdvertCard/AdvertCard';
import React from 'react'
import styles from './Adverts.module.css';

function Adverts({ adverts }) {
    return (
        <div className={styles.adverts}>
            {adverts.map((advert) => (
                <AdvertCard key={advert.id} advert={advert} />
            ))}
        </div>
    )
}

export default Adverts