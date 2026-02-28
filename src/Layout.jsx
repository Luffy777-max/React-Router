import React from 'react'
import Headers from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
    return (
        <>
        <Headers/>
        <Outlet/>
        <Footer/>  {/* This is used to render the child routes */}
        </>
    )
}

export default Layout
