import React, {useLayoutEffect} from "react";
import {Link} from 'react-router-dom'

import '../../App.css';

import NavigationBarTwo from '../../Components/NavigationBar/NavigationBarTwo.js';
import Footer from '../../Components/Footer/Footer.js';

export default function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
  
    <div id="parent-div">
      <NavigationBarTwo></NavigationBarTwo>
      <main>
        <section className="hero">
          <div className="hero-container">
            <h1 className="sr-only">Amy's Wish with Wings</h1>
            <h2 className="intro-para">Welcome</h2>
            <img id="title-image" src="purple_logo.jpg" alt="Amy's Wish with Wings"/>
            <p className="intro-para">Our mission is to provide equine assisted services for children with diverse needs. </p>
            <Link id="register-child-link" className="button-link" to="/awc">Register Your Child</Link>
            <div id="support-container">
              <a href="/support#volunteer-section" className="button-link donate-link">Volunteer</a>
              <a href="https://bobbyfest.com/" className="button-link donate-link">Bobbyfest</a>
              <a href="/support#donate-section" className="button-link donate-link">Donate</a>
            </div>
            
            <img id="down-arrow" src="down-arrow.png" alt="scroll down"/>
          </div>
        </section>
        <section id="about-hero" className="hero">
          <div className="hero-container">
            <h2>About Amy's Wish with Wings</h2>
            <div id="triple-container-hero-two">
              <div className="sub-container-hero-two">
                <img className="hero-two-img" src="doreen_and_amy.jpg" alt=""/>
                <h3>Our Mission</h3>
                <p className="home-gen-para">&emsp;<em>Amy's Wish With Wings</em> is a 501(c)(3) charitable organization that provides Equine Assisted Services to children with special needs.<br/>&emsp;Our goal is to assist each child in reaching their full potential through the healing interaction with horses.<br/>&emsp;Amy's Wish Equine Assisted Services program is located at the <em>Ride With Pride Horsemanship School</em>  in Southlake, Texas. </p>
              </div>
              <div className="sub-container-hero-two">
                <img className = "hero-two-img" src="child_and_horse.jpg" alt=""/>
                <h3>Healing with Horses</h3>
                <p className="home-gen-para">&emsp;The success of equine assisted services is neurological and bio-physical, our brain is constantly communicating with our body. The brain is always assessing its surroundings, making adjustments and compensating. Sometimes through injury or illness, those assessment and compensation pathways are impaired or change, creating a disability. Those pathways need to be strengthened and rehabilitated.” Michigan State University Extension educators contend that equine assisted services are a viable activity that works to do just that. </p>
              </div>
              <div className="sub-container-hero-two">
                <img className="hero-two-img" src="child_and_horse2.jpg" alt=""/>
                <Link to="/about" id="hero-two-learn-more-button" className="button-link">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="sponsor-section">
          <h2>Sponsors</h2>
          <a href="/support#sponsor-section" className="button-link donate-link">Become a Sponsor</a>
          <div id="sponsor-container">
            <a href="https://www.lexarecords.com/"><img className="sponsor"  src="sponsors/lexarecords.png" alt="Lexa Records"/></a>
            <a href="https://www.schneider-wealth.com"><img className="sponsor"  src="sponsors/schneider.png" alt="Schneider Wealth Management"/></a>
            <a href="https://www.southlakewomensclub.org"><img className="sponsor"  src="sponsors/swc.png" alt="Southlake Women's Club"/></a>
            <a href="http://www.latinofactorcorp.com/business/be-part-of-imm--"><img className="sponsor"  src="sponsors/lf.jpg" alt="Latino Factor"/></a>
            <a href="https://www.grubbsvolvocars.com/"><img className="sponsor"  src="sponsors/grubbs.png" alt="Grubbs Volvo Grapevine"/></a>
            <a href="https://thecarboncompanies.com/"><img className="sponsor"  src="sponsors/carbon.jfif" alt="Carbon Companies"/></a>
            <a href="https://www.faant.com/"><img className="sponsor"  src="sponsors/faaant.png" alt="Foot and Ankle Associates of North Texas"/></a>
            <a href="https://doddcreative.com/"><img className="sponsor"  src="sponsors/dodd.jpg" alt="Dodd Creative Group"/></a>
            <a href="https://onealcommercialpainting.com/"><img className="sponsor"  src="sponsors/ocp.jpg" alt="O'Neal Commerical Painting, LLC"/></a>
            <a href="https://ffin.com/"><img className="sponsor"  src="sponsors/ffb.jpeg" alt="First Financial Bank"/></a>
            <a href="https://dentistincolleyville.com/"><img className="sponsor"  src="sponsors/cafdnt.gif" alt="Cosmetic and Family Dentistry of North Texas"/></a>
            <a href="https://www.southwestcf.org/"><img className="sponsor"  src="sponsors/swcf.png" alt="Southwest Community Foundation"/></a>
            <a href="https://jameslandscaping.com/"><img className="sponsor"  src="sponsors/jls.jfif" alt="James Landscaping Inc."/></a>
          </div>
          <h2>Individual Donors</h2>
          <div id="sponsor-container">
            <div className="sponsor-ind">Mr. and Mrs. Paul Herchman</div>
            <div className="sponsor-ind">Dr. Joe and Dr. Joan Kay </div>
            <div className="sponsor-ind">Gabe and Angela Kwentus and Family</div>
            <div className="sponsor-ind">Pat and Shirley Olney</div>
            <div className="sponsor-ind">Shawn and Laura McCaskill &amp; Family</div>
            <div className="sponsor-ind">Richard and Elizabeth York</div>
            
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}