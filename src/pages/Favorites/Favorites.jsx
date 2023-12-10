import Adverts from 'components/Adverts/Adverts';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './Favorites.module.css';

function Favorites() {

    const favoritedAdverts = useSelector(state => state.adverts.favorites)
    return (
        <section className='section'>
            <h1 className={styles.header}>Catalog</h1>
            <p className={styles.about}>Favorited advertises:</p>
            <Adverts className={styles.adverts} adverts={favoritedAdverts} />
        </section>
    )
}

export default Favorites