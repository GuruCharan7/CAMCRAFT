import { Button } from '@mui/material'
import React from 'react'

export default function ManageCourse() {
    return (
        <div>
            <h2 className="text-center">Courses List</h2>
            <div className='row'>
                <div className='col d-flex'>
                <button className='btn btn-info'>ADD COURSE</button>
                </div>
            </div>
            <br />
            <div className='table-container'>
                <div className="row">
                    <table className="table table-hover" >

                        <thead>
                            <tr>
                                <th> Username</th>
                                <th> Email</th>
                                <th> No of Courses Enrolled</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr>
                                <td> {"currentusername"} </td>
                                <td> {"currentemail"}</td>
                                <td> {"20"}</td>
                                <td>
                                    <button onClick={() => { }} style={{ backgroundColor: '#005A9C', color: 'white' }} className="btn">Update </button>
                                    <button style={{ marginLeft: "10px", backgroundColor: '#005A9C', color: 'white' }} onClick={() => { }} className="btn">View </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => { }} className="btn btn-danger">Delete </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}
