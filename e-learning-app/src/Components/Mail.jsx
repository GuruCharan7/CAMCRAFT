import '../CSS/Mail.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Mail() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rubnbyr', 'template_zfc5907', form.current, 'FQ7qh1irh_Mg9uYTf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div class="card" >
                <div class="card-body">
                    <form className='EmailForm' ref={form} onSubmit={sendEmail}>
                        <label className='EmailName'>Name</label>
                        <input className='EmailText' type="text" name="Subiksha" />
                        <label className='EmailName'>Email</label>
                        <input className='EmailText' type="email" name="727821tuad052@skct.edu.in" />
                        <label className='EmailName'>Message</label>
                        <textarea className='EmailMessage' name="message" />
                        <input className='EmailButton' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>

    )
}
