import React from 'react'
import '../CSS/Library.css';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function ResourceLibrary() {

    let navigate = useNavigate();
    return (
        <div className=' library-container-fluid d-flex justify-content-center' style={{ paddingBottom: '4%', width: '100%' }}>
            <div class="library shadow-lg p-3 mb-5 bg-white rounded"  >
                <h5 className="library-header">Resource Library</h5>
                <br />
                <div className="library-body text-start">
                    <h5 className="library-heading d-flex">1. REFERRAL YOUTUBE LINKS</h5>
                    <br />
                    <Link className="link-library-text ">   https://youtu.be/LxO-6rlihSg?si=oLyVoeqtX1Fz18pg</Link>
                    <br />
                    <br />
                    <Link className="link-library-text ">   https://youtu.be/yhAmMUi2NmM?si=rxHV0rP-V7RyUErN</Link>
                    <br />
                    <br />
                    <h5 className="library-heading d-flex">2. E-Books</h5>
                    <br />
                    <p className="library-text">Using the Crop Tool to Create Better Pictures – Free Quick Guide</p>
                    <Link className="link-library-text ">   https://photzy.com/using-the-crop-tool-to-create-better-pictures-free-quick-guide/</Link>
                    <br />
                    <br />
                    <p className="library-text">Color Theory (And How to Make It Work for You) – Free Quick Guide</p>
                    <Link className="link-library-text ">   https://photzy.com/color-theory-and-how-to-make-it-work-for-you-free-quick-guide/</Link>
                    <br />
                    <br />
                    <h5 className="library-heading d-flex">3. COURSE GUIDES</h5>
                    <br />
                    <p className="library-text ">a) Photography for Beginners (The Ultimate Guide in 2023)</p>
                    <p className="library-text ">b) Photography Basics: The Complete Beginner's Guide</p>
                    <p className="library-text ">c) Photography For Beginners Complete Guide: Master Photography</p>
                    <br />


                    <h5 className="library-heading d-flex">3. PRESETS</h5>
                    <br />
                    <p className="library-text ">a) Camera Raw Presets Free Download - FixThePhoto.com</p>
                    <Link className="link-library-text ">   https://fixthephoto.com/camera-raw-presets</Link>
                    <br />
                    <br />
                    <p className="library-text ">b) Photoshop Presets - Adobe</p>
                    <Link className="link-library-text ">   https://www.adobe.com/products/photoshop/presets.html</Link>

                    <br />
                    <br />
                    <button className='btn btn-primary' onClick={()=>{navigate(-1)}}>BACK</button>
                </div>
            </div>
        </div>
    )
}
export default ResourceLibrary