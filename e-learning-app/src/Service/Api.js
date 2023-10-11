import axios from "axios"

let jwtToken = localStorage.getItem('token');
let uid = localStorage.getItem('id');
let authHeader = `Bearer ${jwtToken}`;

export const HEADER = {
    'Authorization' : authHeader,
    'Content-Type' : "application/json"
}

const baseURL = 'http://localhost:8080';

export const getUserById = async () => await axios.get(`${baseURL}/api/v1/user/getByUid/${uid}`, {headers:HEADER})
export const getCourses = async () => await axios.get(`${baseURL}/api/v1/user/getAll`, {headers:HEADER})
export const getInstructors = async () => await axios.get(`${baseURL}/api/v1/user/getallInstructor`, {headers:HEADER})
export const getCoursesById = async (id) => await axios.get(`${baseURL}/api/v1/user/getById/${id}`, {headers:HEADER})
export const courseEnroll = async (data) => await axios.post(`${baseURL}/api/v1/user/enrollCourse`,data, {headers:HEADER})
export const getEnroll = async () => await axios.get(`${baseURL}/api/v1/user/getEnrolled/${uid}`, {headers:HEADER})
export const getCountEnroll = async () => await axios.get(`${baseURL}/api/v1/user/getEnrolled/count/${uid}`, {headers:HEADER})
export const getAllUser = async () => await axios.get(`${baseURL}/api/v1/user/getAllUser`,{headers:HEADER})