import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ProfileDetails } from '../../Info/Info';

const USER_ID = "user_bnnxVvW2kSJ6R7JiYXAQj";
const SERVICE_ID = "service_mqaafbl";
const TAMP_ID = "template_08t9s6n";

const Contact = () => {
    const { email } = ProfileDetails;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TAMP_ID, e.target, USER_ID)
            .then((result) => {
                alert("Email Has Been Successfully Sent!");
                e.target.reset();
            }, (error) => {
                alert(error.text);
            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ height: '90vh' }} className="container py-5">
                <h1 className="text-center fw-bold">Contact <span className="text-main">With Me</span></h1>
                <form className="border p-4 w-50 mx-auto mt-5" onSubmit={sendEmail}>
                    <div class="form-group">
                        <label className="fw-bold" for="exampleFormControlInput1">To</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" value={email} disabled required />
                    </div>
                    <div class="form-group mt-4">
                        <label className="fw-bold" for="exampleFormControlInput1">From</label>
                        <input name="user_email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email (name@example.com)" required />
                    </div>
                    <div class="form-group mt-4">
                        <label className="fw-bold" for="exampleFormControlInput1">Name</label>
                        <input name="user_name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" required />
                    </div>
                    <div class="form-group mt-4">
                        <label className="fw-bold" for="exampleFormControlTextarea1">Massage</label>
                        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn common-background text-white w-100 mt-3" value="Send">Send</button>
                </form>











            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;