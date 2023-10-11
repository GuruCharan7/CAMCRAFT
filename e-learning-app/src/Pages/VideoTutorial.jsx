import React from 'react'
import Footer from '../Components/Footer'

export default function VideoTutorial() {
    return (
        <>
            <div>
                <h4 style={{paddingTop:'3.5%'}}>TUTORIAL VIDEO</h4>
                <iframe
                    src="https://www.youtube.com/embed/V7z7BAZdt2M"

                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                    style={{

                        width: "1000px",
                        height: "600px",
                        marginTop: '50px',
                        overflow: "auto",
                    }}
                />
            </div>
            <hr />
            <div>
                <Footer />
            </div>
        </>
    )
}
