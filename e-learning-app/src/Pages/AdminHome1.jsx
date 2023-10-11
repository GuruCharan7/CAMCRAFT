import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import NavBar from '../Components/NavBar'
import ManageUsers from '../Components/ManageUsers'

export default function AdminHome1() {
    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div className='dashboard-container'>
                <ManageUsers />
            </div>
        </div>
    )
}
