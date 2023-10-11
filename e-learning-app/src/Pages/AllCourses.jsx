import React, { useEffect, useState } from 'react'
import pre from '../Images/b4.webp'
import prev from '../Images/montage.jpg'
import next from '../Images/b3.webp'
import Footer from '../Components/Footer'
import tripod1 from '../Images/o3.1.png'
import tripod2 from '../Images/o3.png'
import { getCourses } from '../Service/Api'
import { createSearchParams, useNavigate } from 'react-router-dom'
import '../CSS/Courses.css'

export default function AllCourses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourse();
  }, [])

  async function getAllCourse() {
    try {
      await getCourses().then((res) => {
        setCourses(res.data)
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  let navigate = useNavigate();

  let handleCatalog = (id) => {
    console.log(id);
    navigate({
      pathname: "/catalog",
      search: createSearchParams({
        id: id
      }).toString()
    })
  }
  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ height: "100%", width: "70%" }}>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={pre} alt="..." style={{ height: "700px", width: "100%" }} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Creative Thinking</h5>
                    <p>Enhances the texture and Aesthetics for Photography.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={next} alt="..." style={{ height: "700px", width: "100%" }} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={prev} alt="..." style={{ height: "700px", width: "100%" }} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className='online'>
        <div className='container-fluid'>
          <div className='row d-flex justify-content-center' style={{ paddingTop: '5%' }}>            
            {
              courses.map((current) => {
                return (
                  <div className='col-md-4'>                    
                  <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <div className='box'>
                      <div className='img'>
                        <img src={tripod2} /> 
                        <img src={tripod1} alt='' className='show' />                      
                      </div>
                      <h1>{current.courseName}</h1>
                      <h6>{current.duration}</h6>
                      <span>Instructor : {current.instructor_id.instructorName}</span>     
                      <br />                
                      <br />                
                      <span onClick={() => { handleCatalog(current.course_id) }}>ENROLL NOW</span>
                    </div>
                  </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* </div> */}
      </section >
      < div style={{ paddingTop: '3%' }}>
        <hr />
        <Footer />
      </div>
    </ >
  )
}
