import React from 'react'
import NavBar from '../partials/NavBar'

export default function Layout({children}) {
    return (
        <div>
            <NavBar />
            { children}
        </div>
    )
}
