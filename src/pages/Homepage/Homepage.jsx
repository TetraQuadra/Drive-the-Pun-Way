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
        id: 9582,
        year: 2008,
        make: "Buick",
        model: "Enclave",
        type: "SUV",
        img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
        description: "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
        fuelConsumption: "10.5",
        engineSize: "3.6L V6",
        accessories: [
            "Leather seats",
            "Panoramic sunroof",
            "Power liftgate"
        ],
        functionalities: [
            "Premium audio system",
            "Remote start",
            "Blind-spot monitoring"
        ],
        rentalPrice: "$40",
        rentalCompany: "Luxury Car Rentals",
        address: "123 Example Street, Kiev, Ukraine",
        rentalConditions: "Minimum age: 25\nValid driver's license\nSecurity deposit required\nCredit card required",
        mileage: 5858,
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
            {/* <Modal data={data} /> */}
        </>
    )
}

export default Homepage