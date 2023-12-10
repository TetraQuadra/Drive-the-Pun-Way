import React, { useEffect, useState } from 'react'
import styles from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getAdverts, getBrandes } from '../../redux/adverts/operations'
import Adverts from 'components/Adverts/Adverts'
import Filter from 'components/Filter/Filter'
import setParams from 'helpers/setParams'

function Catalog() {
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()
    const adverts = useSelector(state => state.adverts.adverts)

    const acceptFilter = (filter) => {
        console.log(filter)
        setFilter(filter)
    }

    useEffect(() => {
        dispatch(getBrandes())

    }, [dispatch])

    useEffect(() => {
        dispatch(getAdverts(setParams(filter)))
    }, [filter, dispatch])


    return (
        <section>
            <h1 className={styles.header}>Catalog</h1>
            <Filter className={styles.filter} acceptFilter={acceptFilter} />
            <Adverts adverts={adverts} />
        </section>
    )
}

export default Catalog