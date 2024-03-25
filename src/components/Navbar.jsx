import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Stema from '../assets/img/stemaRM.png'

export default function Navbar() {
    useEffect(() => {
        const navbarScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const elem = document.getElementById('navbar')
            if (scrollY >= 80) {
                elem.style.background = 'rgb(0, 46, 28)';
                elem.style.transition = '0.5s ease-in-out';
            } else{
                elem.style.background = 'transparent';

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
            <Link className='logo'>
                <img src={Stema} alt='Logo img' />
                <span>RM</span>
            </Link>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/'}>Home</NavLink>
            </nav>
        </div>
    )
}
