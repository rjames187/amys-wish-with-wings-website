import React, { useLayoutEffect, useState } from "react";
import "./Footer.css"
import {Link} from "react-router-dom";


export default function Footer() {
   
    const [status, setStatus] = useState("Submit");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("Sending...");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "name": name,
        "email": email,
        "message": message
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        let response = await fetch("/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setStatus("Submit");
        let result = await response.json();
        console.log(status);
        alert(result.status);
    }

    return (
        <footer id="footer">
            <div id="footer-triple-container">
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <ul className="no-bullet-points">
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/about">About</Link></li>
                        <li><Link className="link" to="/awc">Amy's Wish Club</Link></li>
                        <li><Link className="link" to="/horses">Horses</Link></li>
                        <li><Link className="link" to="/support">Support</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Mailing Address</h3>
                    <p>Amy's Wish With Wings<br/>480 W. Highland St.<br/>Southlake, Tx  76092<br/>817-999-8332</p>
                    <a href="https://www.facebook.com/AmysWishWithWings/"><img id="facebook" src="facebook.png" alt="Follow us on Facebook!"/></a>
                </div>
                <div id="form-section" className="footer-section">
                    <h3>Contact Us</h3>
                    <form onSubmit={handleSubmit}>
                        <label className="sr-only" htmlFor="contact-name">Name</label>
                        <input onChange={handleNameChange} id="contact-name" className="half-input" placeholder=" Name" type="text"></input>
                        <label className="sr-only" htmlFor="contact-email">Email</label>
                        <input onChange={handleEmailChange} id="contact-email" className="half-input" Placeholder=" Email" type="email"></input>
                        <textarea onChange={handleMessageChange} id="message" placeholder="Message"></textarea>
                        <button id="submit" type="submit">{status}</button>
                    </form>
                </div>
                <div id="footer-bottom-hidden">
                    <p>Down arrow icon made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>. Download icon and wings favicon by <a href="https://icons8.com/">Icons8</a></p>
                    <p>© 2022 Amy's Wish with Wings All Rights Reserved</p>
                </div>
            </div>
            <div id="footer-bottom">
                <p>Down arrow icon made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>. Download icon and wings favicon by <a href="https://icons8.com/">Icons8</a></p>
                <p>© 2022 Amy's Wish with Wings All Rights Reserved</p>
            </div>
        </footer>
    );

}