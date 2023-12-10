import Button from 'components/Button/Button';
import LikeButton from 'components/LikeButton/LikeButton';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openModal, toggleFavorite } from '../../redux/adverts/slice';
import styles from './AdvertCard.module.css';

function AdvertCard({ advert }) {

    const favoriteList = useSelector(state => state.adverts.favorites)
    const dispatch = useDispatch()

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    const handleLearnMore = () => {
        dispatch(openModal(advert))
    }

    const Characteristics = ({ data }) => {
        return (
            <div className={styles.characteristics}>
                <ul>
                    <li>{data.city}</li>
                    <li>{data.country}</li>
                    <li>{data.rentalCompany}</li>
                    <li>Type: {data.type}</li>
                    <li>{data.make}</li>
                    <li>{data.id}</li>
                    <li>{data.functionalities[0]}</li>
                </ul>
            </div>
        )
    }

    return (
        <div className={styles.advertCard}>
            <div className={styles.imageWrapper}>
                <img src={advert.img || advert.photoLink} alt={advert.description} />
            </div>
            <div className={styles.title}>
                <h2 className={styles.header}>{advert.make} <span>{advert.model}</span>, {advert.year}
                </h2>
                <span className={styles.header}>${advert.rentalPrice}</span>
            </div>
            <Characteristics data={advert} />
            <Button onClick={handleLearnMore} className={styles.learnMoreButton}>Learn more</Button>
            <LikeButton buttonState={favoriteList.includes(advert.id)} callbackFunction={() => handleToggleFavorite(advert.id)} className={styles.likeButton} />
        </div>
    )
}

export default AdvertCard