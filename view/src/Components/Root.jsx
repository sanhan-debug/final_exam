import React from 'react'
import  Navbar  from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root


