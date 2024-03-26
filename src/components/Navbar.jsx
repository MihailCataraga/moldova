import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Stema from '../assets/img/stemaRM.png'

export default function Navbar() {
    const toTop = window.onload = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        const navbarScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const elem = document.getElementById('navbar')
            if (scrollY >= 80) {
                elem.style.background = 'rgb(0, 46, 28)';
                elem.style.transition = '0.5s ease-in-out';
                elem.style.borderBottom = '1px solid #cfcfcf';
            } else {
                elem.style.background = 'transparent';
                elem.style.borderBottom = 'none';
            }
        }
        // Adaugă event listener pentru scroll
        window.addEventListener('scroll', navbarScroll);
        // Cleanup: elimină event listener-ul când componenta este dezmontată
        return () => {
            window.removeEventListener('scroll', navbarScroll);
        };
    }, [])
    return (
        <div className='navbar' id='navbar'>
            <Link to={'/'} onClick={toTop} className='logo'>
                <img src={Stema} alt='Logo img' />
                <span>RM</span>
            </Link>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/anthem'}>Anthem</NavLink>
                <NavLink to={'/locations'}>Best Locations</NavLink>
            </nav>
        </div>
    )
}
