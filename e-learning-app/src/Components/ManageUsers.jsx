import React, { useEffect, useState } from 'react'
import '../CSS/ManageUsers.css'
import { getAllUser } from '../Service/Api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ManageUsers() {

    const [details, setDetails] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [isDelete, setisDelete] = useState(false);

    let navigate = useNavigate();

    const needDelete = (id) => {
        console.log(id);
        setisDelete(true);
    };

    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {

        try {
            await getAllUser().then((res) => {
                setDetails(res.data)
            })
        }
        catch (error) {
            console.log('error');
        }
    }
    const handleAdduser = async (e) => {
        e.preventDefault()

        try {
            if (name.trim() && email.trim() && password.trim() && role.trim()) {
                const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                    name: name,
                    email: email,
                    password: password,
                    role: role
                });

                if (response.status === 200) {
                    // dispatch(signup({ name: username, email: email, password: password }));
                    toast.success("Account created Successfully");
                    setTimeout(() => {
                        navigate("/manageUser");
                    }, 3000)
                }
            }
            else {
                toast.error("Enter Valid Credentials");
            }
        }
        catch (error) {
            console.log("error");
        }
    }

    return (
        <div>
            <h2 className="text-center">Users List</h2>
            <div className='row'>
                <div className='col d-flex'>
                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">ADD USER</button>
                </div>
            </div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">ADD USER</h5>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <input onChange={(e) => { setName(e.target.value) }} type="text" class="form-control" id="exampleInputName1" placeholder="Enter name" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input onChange={(e) => { setRole(e.target.value) }} type="text" class="form-control" id="exampleInputName1" placeholder="Enter role" />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={handleAdduser}>Save User</button>
                        </div>
                    </div>
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
                                <th> Role</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((current) => {

                                    if (current.role === "STUDENT") {

                                        return (

                                            <tr key={current.uid}>
                                                <td> {current.name} </td>
                                                <td> {current.email}</td>
                                                <td> {current.role}</td>
                                                <td>
                                                    <button onClick={() => { }} style={{ backgroundColor: '#005A9C', color: 'white' }} className="btn">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => {needDelete(current.id)}} className="btn btn-danger">Delete </button>
                                                </td>
                                            </tr>

                                        )
                                    }
                                })
                            }
                        </tbody>

                    </table>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
