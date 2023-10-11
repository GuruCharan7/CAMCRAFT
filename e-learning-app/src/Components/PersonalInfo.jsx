import React from 'react'
import '../CSS/Profile.css'

export default function PersonalInfo() {

    let name = localStorage.getItem("name");
    return (
        <div>
            <img className='profile-header' src={require('../Images/profile.jpg')} />

            <div className='profile-container-header'>

                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="card mb-3" style={{ maxWidth: '540px', border: 'none' }}>
                        <div className="row">
                            <div className="col-md-2 d-flex justify-content-start">
                                <img src={require('../Images/profile-default.jpg')} />
                            </div>
                            <div className="col-md-10 d-flex justify-content-start">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ paddingTop: '2.9%' }}> {name} </h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='personal-info'>
                <div className='container-fluid w-100' >
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card d-flex">
                            <h5 className="card-header d-flex">PERSONAL INFORMATION</h5>
                            <div className="card-body text-start">
                                <div className='row'>
                                    <div className='col'>
                                        <h6 className='card-title '>NAME</h6>
                                        <p className="card-text ">{name}</p>
                                    </div>
                                    <br />
                                    <div className='col'>
                                        <h6 className='card-title '>EMAIL</h6>
                                        <p className="card-text ">charanmenaka@gmail.com</p>
                                    </div>
                                    <div className='col'>
                                        <h6 className='card-title '>PHONE</h6>
                                        <p className="card-text ">8903083176</p>
                                    </div>
                                    <div className='col'>
                                        <h6 className='card-title '>GENDER</h6>
                                        <p className="card-text ">MALE</p>
                                    </div>
                                    <div className='col'>
                                        <h6 className='card-title '>PHONE</h6>
                                        <p className="card-text ">8903083176</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
