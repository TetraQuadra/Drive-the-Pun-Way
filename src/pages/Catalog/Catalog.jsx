import Filter from 'components/Filter/Filter'
import React from 'react'

function Catalog() {

    const setFilter = (filter) => {
        console.log(filter)
    }
    return (
        <section>
            <h1>Catalog</h1>
            <Filter setFilter={setFilter} />

        </section>
    )
}

export default Catalog