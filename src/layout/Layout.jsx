import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Modal from 'components/Modal/Modal'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function Layout() {
    const modalData = useSelector(state => state.adverts.modal)
    return (
        <>
            <Header />
            <Outlet />
            {modalData && <Modal data={modalData} />}
            <Footer />
        </>
    )
}

export default Layout