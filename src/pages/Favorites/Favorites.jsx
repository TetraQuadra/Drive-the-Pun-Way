import Adverts from 'components/Adverts/Adverts';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './Favorites.module.css';

function Favorites() {

    return (
        <section>
            <h1 className={styles.header}>Catalog</h1>
            {/* <Adverts className={styles.adverts} adverts={favoritedAdverts} /> */}
        </section>
    )
}

export default Favorites