import React, { useEffect, useState } from 'react'
import InputDropdown from 'components/InputDropdown/InputDropdown'
import styles from './Filter.module.css'
import InputRange from 'components/InputRange/InputRange'
import Button from 'components/Button/Button'
import fillPricesFilter from 'helpers/fillPricesFilter'

function Filter({ setFilter }) {
    const [filterState, setFilterState] = useState({
        brand: '',
        maxPrice: '',
        minMileage: null,
        maxMileage: null,
    })

    const pricesOptions = fillPricesFilter(10, 100, 10)

    const onBrandChange = (brand) => {
        setFilterState({
            ...filterState,
            brand
        });
    }

    const onMaxPriceChange = (value) => {
        setFilterState({
            ...filterState,
            maxPrice: value
        });
    }

    const onMileageRangeChange = (range) => {
        setFilterState({
            ...filterState,
            minMileage: range.min,
            maxMileage: range.max,
        });
    }

    const onFilterSet = () => {
        if (filterState.minMileage > filterState.maxMileage) {
            return alert('Minimum milage cannot be higher than maximum milage')
        }
        setFilter(filterState)
    }

    return (
        <div className={styles.filter}>
            <InputDropdown
                options={options}
                name={'brand'}
                onChange={onBrandChange}
                className={styles.brandInput}
                label='Car brand' />
            <InputDropdown
                options={pricesOptions}
                name={'maxPrice'}
                onChange={onMaxPriceChange}
                className={styles.priceInput}
                placeholder={'To $'}
                label='Price / 1 hour' />
            <InputRange onChange={onMileageRangeChange} />
            <Button className={styles.buttonSetFilter} onClick={() => onFilterSet(filterState)}>Search</Button>
        </div>
    )
}

export default Filter



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

const prices = [
    { value: 10, label: '$10' },
    { value: 20, label: '$20' },
    { value: 30, label: '$30' },
    { value: 40, label: '$40' },
    { value: 50, label: '$50' },
    { value: 60, label: '$60' },
]