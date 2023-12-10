import React, { useEffect, useState } from 'react'
import styles from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getAdverts, getBrandes } from '../../redux/adverts/operations'
import Adverts from 'components/Adverts/Adverts'
import Filter from 'components/Filter/Filter'
import setParams from 'helpers/setParams'
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

function Catalog() {
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState(null)
    const perPage = 12
    const dispatch = useDispatch()
    const adverts = useSelector(state => state.adverts.adverts)


    //since mockapi.io cant use filters like "greater than 'x'" so i cant build proper request to ask exactly 12 advers that will match filters that uses params range, in this case only solution i found is to get all data from api and emulate this by filtering adverts here, this part can be easily removed if API will have proper handling of params
    const [filteredAdverts, setFilteredAdverts] = useState([])

    useEffect(() => {
        if (!Array.isArray(adverts)) {
            return;
        }
        let tempAdverts = adverts
        if (filter) {
            if (filter.make) {
                tempAdverts = tempAdverts.filter(advert => advert.make === filter.make)
            }
            if (filter.maxPrice) {
                tempAdverts = tempAdverts.filter(advert => advert.rentalPrice <= filter.maxPrice)
            }
            if (filter.maxMileage) {
                tempAdverts = tempAdverts.filter(advert => (advert.mileage <= filter.maxMileage))
            }
            if (filter.minMileage) {
                tempAdverts = tempAdverts.filter(advert => (advert.mileage >= filter.minMileage))
            }
        }
        const endIndex = perPage * currentPage;
        const slicedAdverts = tempAdverts.slice(0, endIndex);
        setFilteredAdverts(slicedAdverts);
    }, [currentPage, filter, adverts]);
    //end of 'not proud of' section



    const acceptFilter = (filter) => {
        setFilter(filter)
        setCurrentPage(1)
    }

    useEffect(() => {
        dispatch(getBrandes())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAdverts(setParams(filter)))
    }, [filter, dispatch])

    return (
        <section className='section'>
            <h1 className={styles.header}>Catalog</h1>
            <Filter className={styles.filter} acceptFilter={acceptFilter} />
            <Adverts className={styles.adverts} adverts={filteredAdverts} />
            <LoadMoreButton callbackFuntion={() => setCurrentPage(currentPage + 1)} />
        </section>
    )
}

export default Catalog