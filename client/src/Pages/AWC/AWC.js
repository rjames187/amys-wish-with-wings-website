import React, {useLayoutEffect} from "react";
import {Link} from 'react-router-dom';
import "./AWC.css"

import NavigationBarTwo from '../../Components/NavigationBar/NavigationBarTwo.js';
import Footer from '../../Components/Footer/Footer.js';

export default function AWC() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div id="parent-div">
            <NavigationBarTwo/>
            <main>
                <section id="main-section-awc">
                    <div id="awc-content">
                        <div className="centered-div">
                            <h1 id="mt-60px" className="header-32">Amy's Wish Club</h1>
                            <p className="header-24"><i>For Riders with Diverse Needs</i></p>
                        </div>
                        <div className="left-div">
                            <p>We are a PATH Center that offers equine adaptive riding for children who experience restricted participation in life situations. Our program (EAS) Equine Assisted Services also known as Therapeutic Horsemanship, is designed to teach horsemanship and riding skills to individuals with diverse abilities. Our goal is to increase functional life skills, improve balance, posture, mobility and function. EAS is provided by PATH International certified therapeutic riding Instructors, wonderful volunteers and our beloved horses.</p>
                            <p>Who Benefits?<br/>Children who can benefit from Equine Assisted Services (EAS): Attention deficit disorder, learning disabilities, down syndrome, developmental delay, brain injuries, cerebral palsy, stroke, hearing &amp; vision impairment, balance issues, selective mutism and autism. Potential benefits may include physical fitness and improved cognitive, emotional, social, or behavioral skills. Some see increases in self-esteem, increased balance, motor control and coordination. Improvement in social skills, behavior skills and overall increased emotional well-being.</p>
                            <p>Call or text <a className="link" href="tel:8179998332">817-999-8332</a> and schedule an appointment to visit our facility to see if we are the right fit for you and your child.  <strong>Download the forms below</strong>, then <a className="link" href="mailto:amyswishwithwings@gmail.com">email</a> or bring in person.</p>
                            <p className="warning-text"><strong>New riders will be placed on a wait-list at this time. Call/text the number above to be added to the list. Participants must meet the weight guidelines of under 150 lbs. for our horses.</strong></p>

                        </div>
                        <div id="purple-div">
                            <a className="download-button" href="https://form.jotform.com/202863983597170">
                                Student Spring Lesson Registration
                                <img className="download-img" src="download.png" alt="download"></img>
                            </a>
                            <Link className="download-button" to="/files/waiver.pdf" target="_blank">
                                Student Release/Waiver Form
                                <img className="download-img" src="download.png" alt="download"></img>
                            </Link>
                            <Link className="download-button" to="/files/medical.pdf" target="_blank">
                                Student Medical Release
                                <img className="download-img" src="download.png" alt="download"></img>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}