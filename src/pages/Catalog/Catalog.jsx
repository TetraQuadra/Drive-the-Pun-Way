import React, { useEffect, useState } from 'react'
import styles from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getAdverts, getBrandes } from '../../redux/adverts/operations'
import Adverts from 'components/Adverts/Adverts'
import Filter from 'components/Filter/Filter'
import setParams from 'helpers/setParams'
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { emptyAdverts } from '../../redux/adverts/slice';

function Catalog() {
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState(null)
    const perPage = 12
    const dispatch = useDispatch()
    const adverts = useSelector(state => state.adverts.adverts)
    const isLoading = useSelector(state => state.adverts.isLoading)
    const pagesEndReached = useSelector(state => state.adverts.pagesEndReached)

    const acceptFilter = (newFilter) => {
        if (newFilter === filter) {
            return
        }
        dispatch(emptyAdverts())
        setFilter(newFilter)
        setCurrentPage(1)
    }

    useEffect(() => {
        dispatch(emptyAdverts())
        dispatch(getBrandes())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAdverts(setParams(perPage, currentPage, filter)))
    }, [filter, dispatch, currentPage])

    return (
        <section className='section'>
            <h1 className={styles.header}>Catalog</h1>
            <Filter className={styles.filter} acceptFilter={acceptFilter} />
            {(adverts.length < 1) && !isLoading && <p>There is no adverts that matches filters, try to change them!</p>}
            <Adverts className={styles.adverts} adverts={adverts} />
            {!pagesEndReached && !isLoading && <LoadMoreButton callbackFuntion={() => setCurrentPage(currentPage + 1)} />}
        </section>
    )
}

export default Catalog