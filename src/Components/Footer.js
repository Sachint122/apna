import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import "../Components/style/Footer.css";
import qrCodeImg from '../Components/photo/app-qr.png'; // replace with your image path
import playStoreImg from '../Components/photo/en_badge_web_generic.png'; // replace with your image path
import logo from '../Components/photo/logo.png'

const Footer = () => (
    <footer className="footer-container">
        <div className="footer-left">
            <div className="footer-logo">
                <div className="logo-box">
                    <img src={logo}></img>
                </div>
                <div>
                    <p>Follow us on social media</p>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom-text">
                <p>© 2025 Apna | All rights reserved</p>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>

        <div className="footer-right">
            <h4>Apply on the go</h4>
            <p>Get real time job updates on our App</p>
            <div className="app-promo">
                <div className="google">
                    <img src={playStoreImg} alt="Google Play" className="play" />
                </div>
                <div className="play-bdge">
                    <img src={qrCodeImg} alt="QR Code" className="qr-code" />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
