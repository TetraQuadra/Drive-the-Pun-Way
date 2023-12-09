import React from 'react'
import Button from 'components/Button/Button'
import styles from './Homepage.module.css'
import LikeButton from 'components/LikeButton/LikeButton'
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton'
import InputDropdown from 'components/InputDropdown/InputDropdown'
import Modal from 'components/Modal/Modal'

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

    const data = {
        id: 9640,
        year: 2018,
        make: "Toyota",
        model: "Camry",
        type: "Sedan",
        img: "https://i.imgur.com/rtHP8E9.png",
        description: "The Toyota Camry is a reliable and fuel-efficient sedan known for its comfortable ride, spacious interior, and advanced safety features.",
        fuelConsumption: "7.1",
        engineSize: "2.5L 4-cylinder",
        accessories: [
            "Leather-trimmed seats",
            "Entune Audio Plus system",
            "Toyota Safety Sense P"
        ],
        functionalities: [
            "Smart Key System",
            "Adaptive Cruise Control",
            "Lane Departure Alert"
        ],
        rentalPrice: "$35",
        rentalCompany: "City Car Rentals",
        address: "234 Example Street, Odesa, Ukraine",
        rentalConditions: "Minimum age: 21\nValid driver's license\nProof of insurance required",
        mileage: 4982,
        city: 'Kiev',
        country: 'Ukraine',
    };


    return (
        <>
            <h1>Homepage</h1>
            <Button className={styles.acceptButton}>Search</Button>
            <LikeButton />
            <LoadMoreButton />
            <InputDropdown options={options} onChange={onChange} />
            <Modal data={data} />
        </>
    )
}

export default Homepage