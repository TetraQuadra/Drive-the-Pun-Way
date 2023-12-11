import React, { useCallback, useState } from 'react'
import InputDropdown from 'components/InputDropdown/InputDropdown'
import styles from './Filter.module.css'
import InputRange from 'components/InputRange/InputRange'
import Button from 'components/Button/Button'
import fillPricesFilter from 'helpers/fillPricesFilter'
import { useSelector } from 'react-redux'

function Filter({ acceptFilter, className }) {
    const [filterState, setFilterState] = useState({
        make: '',
        maxPrice: '',
        minMileage: null,
        maxMileage: null,
    })

    const pricesOptions = fillPricesFilter(10, 100, 10)
    const brandsOptions = useSelector(state => state.adverts.brands)

    const onFilterChange = useCallback(
        (value) => {
            setFilterState((state) => ({
                ...state,
                ...value
            }));
        },
        [setFilterState]
    );



    const onFilterSet = () => {
        if (filterState.minMileage > filterState.maxMileage && filterState.maxMileage) {
            return alert('Minimum milage cannot be higher than maximum milage')
        }
        acceptFilter(filterState)
    }

    return (
        <div className={`${styles.filter} ${className}`}>
            <InputDropdown
                options={brandsOptions}
                name={'make'}
                onChange={onFilterChange}
                className={styles.brandInput}
                label='Car brand' />
            <InputDropdown
                options={pricesOptions}
                name={'maxPrice'}
                onChange={onFilterChange}
                className={styles.priceInput}
                placeholder={'To $'}
                label='Price / 1 hour' />
            <InputRange label={'Сar mileage / km'} nameMax={'maxMileage'} nameMin={'minMileage'} onChange={onFilterChange} />
            <Button className={styles.buttonSetFilter} onClick={() => onFilterSet(filterState)}>Search</Button>
        </div>
    )
}

export default Filter
