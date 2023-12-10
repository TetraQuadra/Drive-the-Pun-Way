import Modal from 'components/Modal/Modal'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function Layout() {
    const modalData = useSelector(state => state.adverts.modal)
    return (
        <>
            <Outlet />
            {modalData && <Modal data={modalData} />}
        </>
    )
}

export default Layout