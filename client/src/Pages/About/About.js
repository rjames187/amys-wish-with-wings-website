import React, {useLayoutEffect} from "react";

import './About.css';

import NavigationBarTwo from '../../Components/NavigationBar/NavigationBarTwo.js';
import Footer from '../../Components/Footer/Footer.js';

export default function About() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div id="parent-div">
            <NavigationBarTwo></NavigationBarTwo>
            <main>
                <section id="main-section">
                    <div id="main-info-container">
                        <h1 className="header-32">About Amy's Wish with Wings</h1>
                        <p id="about-mission">Our mission is to provide equine assisted services for children with diverse needs.</p>
                        <img id="about-doreen-and-amy" src="doreen_and_amy.jpg" alt="Doreen and Amy"/>
                        <div className="align-p">
                            <p>&emsp;Doreen Bruton founded Amy's Wish With Wings Charity in 2011 to give Amy Stefanko her wings. Due to complications from leukemia Amy had to learn how to speak and walk again. Amy started equine assisted services to help her recover.  Amy's wish was to learn to ride independent of a lead line with side walkers and under Doreen's care and instruction she achieved her wish!  Amy continues to flourish today in the program held at Ride with Pride Horsemanship School in Southlake, Texas. </p>
                            <p>&emsp;Amy's Wish kids compete at the Equestrian Special Olympics every Spring. We will also be compete at the Chisholm Challenge held at the Fort Worth Stock Show in January.</p>
                        </div>
                        <p>&emsp;<em>Amy’s Wish With Wings does not and shall not discriminate on the basis of race, color, religion, (creed), gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.</em></p>
                    </div>
                </section>
                <div id="directors">
                
                    <section className="purple-section">
                        <h2 className="header-32">Meet our Board of Directors</h2>
                        <div className="director-inner-div">
                            <img className="director-img" src="doreen.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Doreen Bruton, Founder &amp; Executive Director</h3>
                                <p>&emsp;Founded Amys Wish With Wings in 2011.  She seeks to better the quality of life for the special needs children she teaches.  She has been involved with horses her whole life growing up showing, playdays and rodeo.   Her passion for her horses and the love she has for her students shines throughout the Barn and arena.  Doreen’s credentials include:  PATH International (Professional Assoc of Therapeutic Horsemanship International), CHA (Certified Horsemanship Assoc), and Spirithorse certifications.  She has over 41 years of operating a successful horsemanship school at Ride With Pride, Inc in Southlake. Making memories today for tomorrow.  Enriching the lives of all she touches.</p>

                            </div>
                            <div className="director-contact-white">
                                <a className="link" href="mailto:amyswishwithwings@gmail.com">amyswishwithwings@gmail.com</a>
                                <a className="link" href="tel:8179998332">817-999-8332</a>
                            </div>
                        </div>
                    </section>
                    <section className="white-section">
                        
                        <div className="director-inner-div">
                            <img className="director-img" src="bob.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Bob Seebeck</h3>
                                <p>&emsp;Bob Seebeck was one of the first Board of Directors on Amys Wish in 2011.  He was a successful businessman who ran his own business for over 40 years.  He remains a world of knowledge and advice to our growth in this industry.  You will see him on the tractor, fixing things and helping out at the barn everyday. </p>

                            </div>
                            <div className="director-contact-purple">
                                <a className="link" href="mailto:Leadman9@gmail.com">Leadman9@gmail.com</a>
                                <a className="link" href="tel:2146681215">214-668-1215</a>
                                
                            </div>
                        </div>
                    </section>
                    <section className="purple-section">
                        
                        <div className="director-inner-div">
                            <img className="director-img" src="elizabeth.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Elizabeth York, retired RN</h3>
                                <p>&emsp;Elizabeth York is a retired RN living in central Kentucky.  She met Doreen while she and her husband were living in Texas between 1984-1988 and has maintained a friendship with her for over 30 years.  Elizabeth has owned her current horse (her third) for the last 16 years and currently rides English with emphasis on natural horsemanship and dressage. She has volunteered for Amy's Wish with Wings during several visits to Texas to see Doreen and, through her experience and the stories she has heard about the program, she has developed an interest in seeing the program continue to move forward and grow in providing equine assisted services for children and young adults with diverse needs.</p>

                            </div>
                            <div className="director-contact-white">
                                <a className="link" href="mailto:ewyork@roadrunner.com">ewyork@roadrunner.com</a>
                                <a className="link" href="tel:5025989306">502-598-9306</a>
                            
                            </div>
                        </div>
                    </section>
                    <section className="white-section">
                        
                        <div className="director-inner-div">
                            <img className="director-img" src="joan.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Dr. Joan P. Kay, MD FAAP</h3>
                                <p>&emsp;I have been a lifetime lover of horses, and I have had the privilege of knowing Doreen Bruton since 2005.  She has taught both of my children to ride and helped them develop a great love and respect for horses.  The barn has become their happy and safe place to be with their own horses.</p>
                                <p>&emsp; I have been a full-time pediatrician in Irving, TX since 2000.  I currently serve on a camp board for children with special needs and am honored to be chosen to serve on the Board for Amy's Wish.   I am excited to see the Children of Amy's Wish develop confidence, mobility, trust and independence through riding.  I am excited to help further this wonderful organization's growth so that the kids of Dallas Fort Worth can enjoy Doreen's vision for years to come.</p>

                            </div>
                            <div className="director-contact-purple">
                                <a className="link" href="mailto:jpkay@hotmail.com  ">jpkay@hotmail.com  </a>
                                <p>No Phone</p>
                                
                            </div>
                        </div>
                    </section>
                    <section className="purple-section">
                        
                        <div className="director-inner-div">
                            <img className="director-img" src="lisa.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Lisa Rawls, Horse Specialist</h3>
                                <p>&emsp;I am a 25+ year resident of Southlake and have known Doreen Bruton since 1995 and knowing her has enriched and educated me in ways I would have had if I had not sought her out.   I give my time to helping out at the barn and I love being there, it’s my “Zen”.  My kids took riding lessons at her barn known Ride with Pride and bought my first horse from her and she helped me choose current and past members of my horse family.  I am so excited to be on the board because it is such a necessity to any child that is in need of to build self-esteem and to be included in normal activities.</p>
                                <p>&emsp;I have served on a few boards of organizations that are of my own special interest and Amy’s Wish could not be dearer to my heart.  I am excited to be on this board and hope that my input along with the other board members will help make Amy’s Wish more successful and increase its longevity into the future to give these and other kids the opportunities as all of our kids experience and our communities, as Amy’s Wish with Wings is open to all communities and their needs.</p>

                            </div>
                            <div className="director-contact-white">
                                <a className="link" href="mailto:Lrawls58@gmail.com">Lrawls58@gmail.com</a>
                                <a className="link" href="tel:8177147496  ">817-714-7496</a>
                            
                            </div>
                        </div>
                    </section>
                    <section className="white-section">
                        
                        <div className="director-inner-div">
                            <img className="director-img" src="grady.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Grady Bruton, Animal Science Graduate &amp; Instructor</h3>
                                <p>&emsp;I graduated from Tarleton State University with a bachelor’s degree in Animal Science.  I am an active member of the Paradise Volunteer Fire Department and a certified EMT.  I am a PATH Certified Riding Instructor and teach lessons to special needs children for Amy’s Wish With Wings.  I am also a licensed ham radio operator and volunteer my skills to the office of emergency management and national weather service during severe weather events and other disasters that may hinder normal methods of communication.</p>
                                <p>&emsp;I have been around horses all my life. I have seen the healing effects horses can have on a person, both physically and mentally. My goal in life is to help as many people as I can, whether that’s teaching a therapy lesson or responding to a 911 call.  Growing up I competed in 4-H and FFA showing and judging horses and cattle.  I also teach at Ride With Pride horsemanship school.  I look forward to serving on the board of directors and I am excited to see how we can help connect more people with the healing power of horses.</p>

                            </div>
                            <div className="director-contact-purple">
                                <a className="link" href="mailto:Kf5qbo@gmail.com">Kf5qbo@gmail.com</a>
                                <a className="link" href="tel:817-455-0621">817-455-0621</a>
                                
                            </div>
                        </div>
                    </section>
                    <section className="purple-section">
                        
                        <div className="director-inner-div">
                            <img className="director-img" src="jaimie.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Jaimie Ostrom, RN, MSN, CEN, CNL</h3>
                                <p>&emsp;I have Volunteered 4 years as a side walker for Amy's Wish, routinely spending every Wednesday at the barn, before joining the board. Upon moving to Texas from Chicago,  I wanted to learn something new, give back to a community, and embrace the Texas culture. I found Amy's Wish from a Yelp posting and the rest is history!</p>
                                <p>&emsp;Having experienced working in pediatric hospitals, I have witnessed first hand the impact diagnoses and disease progression make on a family. It has been rewarding and fulfilling to see the positive impact of equine therapy in the lives of our students and their families. Being a part of Amy's Wish is absolutely incredible because one can witness and contribute to students healing, growth, and development to their highest potential regardless of your background.  I whole heartedly believe in our mission and hope to assist the board in providing equine therapy to all those in need and can benefit from our program.</p>

                            </div>
                            <div className="director-contact-white">
                                <a className="link" href="mailto:Jaimie.amyswish@gmail.com">Jaimie.amyswish@gmail.com</a>
                                <a className="link" href="tel:8153820227">815-382-0227</a>
                            
                            </div>
                        </div>
                    </section>
                    <section className="white-section">
                        
                        <div className="director-inner-div">
                            <img className="director-img" src="wende.png" alt=""/>
                            
                            <div className="align-p">
                                <h3>Wende Copp, Special Education Teacher &amp; Horse Specialist</h3>
                                <p>&emsp;Wende has been on the Board of Directors of Amy’s Wish since it began in 2011.  She has been a long-time friend of Doreen’s for over 30+ years and they would compete together at The Ft. Worth Stock Show Rodeo as Ranch Girls.   Wende began riding when she was 5 years old showing POAs, participating in playdays, then barrel racing. She started teaching riding lessons when she was 14 years old.</p>
                                <p>&emsp;Wende has a Master’s Degree in Special Education and has been teaching for over 30 years. She has taught all grade levels from kindergarten to 12th grade and from Oklahoma, Virginia, Colorado, to Texas.  She has also been involved in Special Olympics for Basketball and Track and Field.  She is a mom to 3 children and a grandmother of 1.</p>
                                <p>&emsp;Wende is excited to see the growth of Amy’s Wish and the number of students that have benefitted from the program.</p>
                            </div>
                            <div className="director-contact-purple">
                                <a className="link" href="mailto:Wende.copp@me.com">Wende.copp@me.com</a>
                                <a className="link" href="tel:3037181952">303-718-1952</a>
                                
                            </div>
                        </div>
                    </section>
                    
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}