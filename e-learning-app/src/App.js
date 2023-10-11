import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import MyCourses from './Pages/MyCourses';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AllCourses from './Pages/AllCourses';
import MyHome from './Pages/MyHome';
import TermsConditions from './Components/TermsConditions';
import AdminDashboard from './Pages/AdminDashboard';
import Profile from './Pages/Profile';
import InstructorDashboard from './Pages/InstructorDashboard';
import CourseCatalog from './Pages/CourseCatalog';
import AdminHome from './Pages/AdminHome1';
import VideoTutorial from './Pages/VideoTutorial';
import Mail from './Components/Mail';
import AdminHome1 from './Pages/AdminHome1';
import AdminHome2 from './Pages/AdminHome2';
import ResourceLibrary from './Pages/ResourceLibrary';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<AllCourses/>} />
          <Route path='/catalog' element={<CourseCatalog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/instructorDashboard' element={<InstructorDashboard />} />
          <Route path='/mycourses' element={<MyCourses />} />
          <Route path='/home' element={<MyHome />} />
          <Route path='/manageUser' element={<AdminHome1 />} />
          <Route path='/manageCourse' element={<AdminHome2 />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/termscondition' element={<TermsConditions />} />  
          <Route path='/tutorial' element={<VideoTutorial />} />  
          <Route path='/mail' element={<Mail />} />  
          <Route path='/library' element={<ResourceLibrary />} />  
          
        </Routes>
    </div>
  );
}

export default App;
