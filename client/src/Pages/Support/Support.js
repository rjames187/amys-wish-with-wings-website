import React, {useLayoutEffect} from "react";
import NavigationBarTwo from '../../Components/NavigationBar/NavigationBarTwo.js';
import Footer from '../../Components/Footer/Footer.js';
import {Link} from 'react-router-dom';
import "./Support.css"

export default function Support() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div id="parent-div">
            <NavigationBarTwo/>
            <main>
                <section id="main-section-support" className="purple-section">
                    <div className="section-content">
                        <h1 className="header-32 text-align-center">Three Ways to Support Amy's Wish</h1>
                        <img className="large-img-support" src="wyatt.jpg" alt=""/>
                        <div id="support-horizontal" className="horizontal">
                            <a className="button-link side-margin" href="#donate-section">Donate</a>
                            <a className="button-link side-margin" href="#sponsor-section">Sponsor</a>
                            <a className="button-link side-margin" href="#volunteer-section">Volunteer</a>
                        </div>
                    </div>
                </section>
                <section id="donate-section" className="white-section">
                    <div className="section-content">
                        <h2 className="header-32">Donate as an Individual</h2>
                        <img className="large-img-support" src="bethegood.jpg" alt=""/>
                        <div className="horizontal">
                            <a className="button-link side-margin" href="https://www.paypal.com/donate/?hosted_button_id=QH8EZ5BGXS2XS">PayPal</a>
                            <a className="button-link side-margin" href="https://account.venmo.com/u/doreen-bruton">Venmo</a>
                            
                        </div>
                    </div>
                </section>
                <section id="sponsor-section" className="purple-section">
                    <div className="section-content">
                        <h2 className="header-32">Sponsor as a Business</h2>
                        <p>Every year Amy's Wish hosts Bobby Fest.</p>
                        <img className="med-img" src="bobbyfest.jpg" alt=""/>
                        <p>To sponsor our event and get some free tickets, download and fill out the form below. <br/>Email to <a className="link" href="mailto:amyswishwithwings@gmail.com">amyswishwithwings@gmail.com</a></p>
                        <Link className="support-download-btn download-button" to="/files/bobby.pdf" target="_blank">
                                Bobby Fest Forms
                                <img className="download-img" src="download.png" alt="download"></img>
                        </Link>
                    </div>
                </section>
                <section id="volunteer-section" className="white-section">
                    <div className="section-content">
                        <h2 className="header-32">Volunteer as an Individual</h2>
                        <img className="large-img" src="staff.jpg" alt=""/>
                        <p>To volunteer, download and fill out the form below. <br/><a className="link" href="#submit">Contact us</a> with any questions.</p>
                        <Link className="support-download-btn download-button" to="/files/volunteer.pdf" target="_blank">
                                Volunteer Release/Waiver Form
                                <img className="download-img" src="download.png" alt="download"></img>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

