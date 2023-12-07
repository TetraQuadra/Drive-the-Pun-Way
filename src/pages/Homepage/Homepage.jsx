import React from 'react'
import Button from 'components/Button/Button'
import styles from './Homepage.module.css'
import LikeButton from 'components/LikeButton/LikeButton'
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton'
import InputDropdown from 'components/InputDropdown/InputDropdown'

function Homepage() {

    const onChange = (option) => {
        console.log(option)
    }

    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'orange', label: 'Orange' },
        { value: 'banana', label: 'Banana' },
        { value: '123', label: '123' },
        { value: '144', label: '144' },
        { value: '11', label: '11' },
        { value: '123123', label: '123123' },
        { value: '1231233', label: '1231233' },
        { value: 'asdasd', label: 'asdasd' },
        { value: 'qwe', label: 'qwe' },
        { value: 'zxc', label: 'zxc' },
        { value: 'asfg', label: 'qwerty' },
    ];


    return (
        <>
            <h1>Homepage</h1>
            <Button className={styles.acceptButton}>Search</Button>
            <LikeButton />
            <LoadMoreButton />
            <InputDropdown options={options} onChange={onChange} />
        </>
    )
}

export default Homepage