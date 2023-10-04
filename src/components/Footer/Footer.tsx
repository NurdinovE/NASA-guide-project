import * as React from "react";

import "./Footer.css"

import logo from "../../assets/LOGO.png"
import facebook from "../../assets/facebook.png"
import insta from "../../assets/insta.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footerLogo">
                    <img src={logo} alt="Footer logo"/>
                </div>
                <div className="footerMenu">
                    <div className="menuNav">
                        <a href="/" className="menuLink">home</a>
                        <a className="menuLink" href="/solar-system">solar system</a>
                        <a className="menuLink" href="/missions">missions</a>
                    </div>
                    <div className="menuSocial">
                        <a href="#" className="menuLink"><img src={facebook} alt=""/></a>
                        <a href="#" className="menuLink"><img src={insta} alt=""/></a>
                        <a href="#" className="menuLink"><img src={twitter} alt=""/></a>
                        <a href="#" className="menuLink"><img src={youtube} alt=""/></a>
                    </div>

                </div>
                <hr/>
                <div className="footerText">
                    © 2022 Infinity & Beyond, LLC. All rights reserved to Rodrigo Oliveira Santos.
                </div>

            </div>
        </footer>
    );
};

export default Footer;