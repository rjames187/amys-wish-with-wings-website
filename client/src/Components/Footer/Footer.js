import React from "react";
import "./Footer.css"
import {Link} from "react-router-dom";


export default function Footer() {

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
                    <p>Amy's Wish WIth Wings<br/>480 W. Highland St.<br/>Southlake, Tx  76092<br/>817-999-8332</p>
                    <a href="https://www.facebook.com/AmysWishWithWings/"><img id="facebook" src="facebook.png" alt="Follow us on Facebook!"/></a>
                </div>
                <div id="form-section" className="footer-section">
                    <h3>Contact Us</h3>
                    <form>
                        <label className="sr-only" for="contact-name">Name</label>
                        <input id="contact-name" className="half-input" placeholder=" Name" type="text"></input>
                        <label className="sr-only" for="contact-email">Email</label>
                        <input id="contact-email" className="half-input" Placeholder=" Email" type="email"></input>
                        <textarea placeholder="Message"></textarea>
                        <button id="submit" type="submit">SUBMIT</button>
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