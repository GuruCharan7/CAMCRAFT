import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import NavBar from '../Components/NavBar'
import ManageCourse from '../Components/ManageCourse'

export default function AdminHome2() {
    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div className='dashboard-container'>
                <ManageCourse />
            </div>
        </div>
    )
}
