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
          
          <a id="gra-champ" href="https://jameslandscaping.com/"><img className="sponsor"  src="sponsors/jlsgcs.png" alt="James Landscaping Inc."/></a>
          <a href="/support#sponsor-section" className="button-link donate-link">Become a Sponsor</a>
          <h3>Reserve Champion</h3>
          <div class="sponsor-container">
            <div className="sponsor-ind">Gabe and Angela Kwentus and Family</div>
            <div className="sponsor-ind">Herschman Family Foundation</div>
          </div>
          <h3>Award of Excellence</h3>
          <div class="sponsor-container">
            <div className="sponsor-ind">Grubbs Family</div>
            <a href="https://precisioneaglepools.com/"><img className="sponsor"  src="sponsors/preceagle.png" alt="Precision Eagle Pools"/></a>
            <div className="sponsor-ind">Kay Family</div>
            <a href="http://www.ridewithprideinc.com/"><img className="sponsor"  src="sponsors/rdwp.png" alt="Ride with Pride"/></a>
          </div>
          <h3>Blue Ribbon</h3>
          <div class="sponsor-container">
            <a href="https://dentistincolleyville.com/"><img className="sponsor"  src="sponsors/cafdnt.gif" alt="Cosmetic and Family Dentistry of North Texas"/></a>
            <a href="https://tomorrowsdesigns.com/"><img className="sponsor"  src="sponsors/td.png" alt="Tomorrows Designs"/></a>
            <a href="https://www.outlawequinevet.com/"><img className="sponsor"  src="sponsors/ole.png" alt="Outlaw Equine"/></a>
            <div className="sponsor-ind">Paul and Susan Straten</div>
            <a href="https://wyredav.com/"><img className="sponsor"  src="sponsors/wy.png" alt="Wyred AV"/></a>
            <div className="sponsor-ind">The Bruton Family</div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}