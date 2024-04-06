import React from 'react';
import Stema from '../assets/img/stemaRM.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function () {
    const toTop = window.onload = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className='footer'>
            <div className='content'>
                <img src={Stema} alt='Stema RM img' />
                <div className='links'>Links:
                    <Link to='/anthem' onClick={toTop} >Anthem</Link>
                    <Link to='/locations' onClick={toTop} >Best Locations</Link>
                </div>
                <div className='socialMedia'>
                    <Link to={'/'} onClick={toTop}>
                        <FaInstagram className='icon' />
                    </Link>
                    <Link to={'/'} onClick={toTop}>
                        <FaFacebookF className='icon' />
                    </Link>
                    <Link to={'/'} onClick={toTop}>
                        <FaXTwitter className='icon' />
                    </Link>
                    <Link to={'/'} onClick={toTop}>
                        <FaYoutube className='icon' />
                    </Link>
                    <Link to={'/'} onClick={toTop}>
                        <FaTiktok className='icon' />
                    </Link>
                </div>
            </div>
            <p>Developed by Midas Group 2024.</p>
        </div>
    )
}
