import AdvertCard from 'components/AdvertCard/AdvertCard';
import React from 'react'
import styles from './Adverts.module.css';

function Adverts({ adverts }) {
    console.log(adverts)
    return (
        <>
            {adverts.map((advert) => (
                <AdvertCard key={advert.id} advert={advert} />
            ))}
        </>
    )
}

export default Adverts