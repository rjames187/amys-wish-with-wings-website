import React, {useLayoutEffect} from "react";
import "./Horses.css";
import NavigationBarTwo from '../../Components/NavigationBar/NavigationBarTwo.js';
import Footer from '../../Components/Footer/Footer.js';



export default function Horses() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div id="parent-div">
            <NavigationBarTwo/>
            <main>
                <section id="horses-first-section" className="section">
                    <div className="section-content">
                        <h1 id="horses-header">Our Horses</h1>
                        <img className="large-img" src="horses.jpg" alt=""/>
                        <a href="#strawberry" className="margin-17 button-link">Meet our Horses</a>
                    </div>
                </section>
                <section className="section">
                    <div id="section-content-horses-two">
                    <div id="strawberry" className="horse-div">
                            <img className="horse-img" src="horseImages/strawberry.jpeg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Strawberry</h2>
                                <p>Strawberry is a 18 year old strawberry roan and came from Commerce, Texas. Her father was famous. Look up Peptoboomsmal. He is a $26+ million dollar sire with many awards in cutting, reining cow horse, ranch riding and cowboy events. Strawberry is a master at opening stall doors...but only for her friends! <strong>*2020 BARN FAVORITE*</strong></p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/dollar.jpeg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Dollar</h2>
                                <p>Dollar is 24 years old and came to us as a retired team roping horse. He won 4 buckles, money and an OTRA (Original Team Roping Association) event as a header. He came to our barn with Gray who was also a header. For those that don't know, a header horse is the first to rope the steer around the horns. Some of our best therapy horses have been retired rope horses and he is a shining star at our barn. <strong>*2020 THERAPY HORSE OF THE YEAR*</strong></p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/applejack.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Apple Jack</h2>
                                <p>Apple Jack is a 15 year old appaloosa pony. He is very eager to please and oh so sweet! He enjoys the kids and of course treats! He is currently in training to become a therapy pony.</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/cherokee.jpeg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Cherokee</h2>
                                <p>Cherokee is a 21 year old paint and full of personality! In his former home he was a trick horse. When he isn't at the barn for lessons you can watch him goat tying at a rodeo with one of our staff members in the North Texas High School Rodeo Association.</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/chief.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Chief</h2>
                                <p>Chief is a 21 year old Pony of America and was a ranching pony in his younger days. Doreen drove up to Oklahoma to buy him. He is eager to please with lots of energy and a kind spirit. He had dedicated his life to making kids smile.</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/gus.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Tamon</h2>
                                <p>Tamon is 19 years old and was donated to us this past February. He is an adorable Arabian gelding who EVERYONE loves! He is always willing to please and is a very smooth to ride.</p>

                            </div>
                        </div>
                        
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/dottie.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Dottie</h2>
                                <p>Dottie is an 11 year old leopard appaloosa pony in training for therapy. We picked her up in Grandview, Texas the week of Thanksgiving in 2020. She was in a barn fire and has a burn down her back and a broken tail. She is a sweetheart and has made an excellent addition to our program!</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/freckles.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Freckles</h2>
                                <p>Doreen bought Freckles off of a longhorn ranch in Cross Plains, Texas. The ranch owners children outgrew him but he made an excellent addition to our barn. He's also pretty handy working cows in Paradise. He is a 16 year old Pony of America.</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/gray.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Gray</h2>
                                <p>Gray is a handsome 21 year old flea bitten gray Quarter Horse. He came to use with Dollar as a retired roping horse as well. He is so sweet with a wonderful personality!</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/gus.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Gus</h2>
                                <p>Gus is 18 years old and is the newest member of the Ride With Pride horse team. He came from Abeline, TX where he was a working ranch horse. Mr. Gus has jumped right in to our program. This handsome fella is so very sweet and loves the kiddos!</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/jessie.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Jessie</h2>
                                <p>Jessie is 21 years old and came to us from Sky Ranch where she was in their trail program. She has become a favorite for our instructors and loves her job!</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/lucy.png" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Lucy</h2>
                                <p>Lucy is a 21 year old sweetheart! She came from Huntsville, Texas where she was a prison horse. She either worked on the cattle ranch or was a mounted patrol in the prison yard. Next time you are at the barn take a look at her brands. These are the brands of the Huntsville prison system.</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/gus.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Missy</h2>
                                <p>Missy is an 12 year old halflinger pony. She is also our resident unicorn! Doreen bought her in Ponder, Texas from a lady who rescues horses from auctions. She is in training to be a therapy horse.</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/moon.png" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Moon</h2>
                                <p>Moon is a 22 year old welsh pony and came from a cattle ranch in Paradise, Texas. Many children have enjoyed riding him both with us and back at the ranch. He is so patient and kind with our youngest riders.</p>

                            </div>
                        </div>
                        <div className="horse-div">
                            <img className="horse-img" src="horseImages/patches.jpg" alt=""/>
                            <div className="horse-sub-div">
                                
                                <h2>Patches</h2>
                                <p>Patches is a 15 year old overo buckskin American Paint Horse. He came from New Mexico where he was used for hunting in the mountains. He is super friendly and loves everyone he meets!</p>

                            </div>
                        </div>
                        
                        
                    </div>
                </section>
            </main>
            <Footer/>
        </div> 
    );
}