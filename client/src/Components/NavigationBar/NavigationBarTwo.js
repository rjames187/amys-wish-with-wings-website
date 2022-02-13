//this second homemade navigation bar is being created to replace the material ui pre-made version
import * as React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';


export default function NavigationBarTwo() {

    /**const barItems = ["About Us", "Amy's Wish Club", "Horses", "Donate" ];
    const renderedBarItems = barItems.map(i => <li>{i}</li>); **/

    const [sideBarIsOpen, setSideBar] = useState(false);

    const handleOpenSideBar = (e) => setSideBar(sideBarIsOpen ? false : true);

    return (
        <header id="header">
            <div id="nav-container">
                <div id="logo">
                    <Link to="/">
                        <img src="purple_logo.jpg" alt="Amy's Wish with Wings Home"/>
                    </Link>
                </div>
                <nav >s
                    <ul id="default-nav-lst">
                        <li><Link className="general-link" to="/about">About Us</Link></li>
                        <li><Link className="general-link" to="/awc">Amy's Wish Club</Link></li>
                        <li><Link className="general-link" to="/horses">Horses</Link></li>
                        <li><Link className="button-link" to="/support">Support Us</Link></li>
                    </ul>
                </nav>
                <nav id={sideBarIsOpen ? 'side-bar-open' : 'side-bar-closed'}>
                    <div id="x-wrapper">
                        <div id="x-container" onClick={handleOpenSideBar} className="icon-container">
                            <FaTimes id="x"/>
                        </div>
                    </div>
                    <ul id="sideBar-list">
                        <li><Link className="sideBar-link" to="/">Home</Link></li>
                        <li><Link className="sideBar-link" to="/about">About</Link></li>
                        <li><Link className="sideBar-link" to="/awc">Amy's Wish Club</Link></li>
                        <li><Link className="sideBar-link" to="/horses">Horses</Link></li>
                        <li><Link className="sideBar-link" to="/support">Support Us</Link></li>
                    </ul>
                </nav>
                <div onClick={handleOpenSideBar} className="icon-container">
                    <FaBars id="hamburger"/>
                </div>
            </div>
        </header>
    )
}