import React from 'react'
import Button from 'components/Button/Button'
import styles from './Homepage.module.css'
import LikeButton from 'components/LikeButton/LikeButton'
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton'

function Homepage() {
    return (
        <>
            <h1>Homepage</h1>
            <Button className={styles.acceptButton}>Search</Button>
            <LikeButton />
            <LoadMoreButton />
        </>
    )
}

export default Homepage