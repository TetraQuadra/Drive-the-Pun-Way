import Filter from 'components/Filter/Filter'
import setParams from 'helpers/setParams'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAdverts, getBrandes } from '../../redux/adverts/operations'

function Catalog() {
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()

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
            <h1>Catalog</h1>
            <Filter acceptFilter={acceptFilter} />
        </section>
    )
}

export default Catalog