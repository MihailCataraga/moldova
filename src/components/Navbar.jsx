import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Stema from '../assets/img/stemaRM.png';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [mini, setMini] = useState(false);
    const toTop = window.onload = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const miniMenu = () => {
        const elem = document.getElementById('miniMenu');
        elem.style.display = 'flex'
        elem.style.animation = '.5s miniMenu linear'
    }
    const closeMiniMenu = () => {
        const elem = document.getElementById('miniMenu');
        elem.style.animation = '.5s closeMiniMenu linear'
        setTimeout(() => {
            elem.style.display = 'none'
        }, 500)
    }
    const handleClickOutside = (event) => {
        const menu = document.getElementById('miniMenu');
        if (menu.style.display === 'flex' && !event.target.closest('.miniMenu')) {
            closeMiniMenu();
            setMini(false)
        }
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

        document.addEventListener('mousedown', handleClickOutside);
        // Cleanup: elimină event listener-ul când componenta este dezmontată
        return () => {
            window.removeEventListener('scroll', navbarScroll);

            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <div className='navbar' id='navbar'>
            <Link to={'/'} onClick={toTop} className='logo'>
                <img src={Stema} alt='Logo img' />
                <span>RM</span>
            </Link>
            <nav className='nav'>
                <NavLink to={'/'} onClick={toTop}>Home</NavLink>
                <NavLink to={'/anthem'} onClick={toTop}>Anthem</NavLink>
                <NavLink to={'/locations'} onClick={toTop}>Best Locations</NavLink>
            </nav>
            <div className='miniNav'>
                {mini
                    ? <IoMdClose className='icon' onClick={() => { closeMiniMenu(), setMini(false) }} />
                    : <IoMenu className='icon' onClick={() => { miniMenu(), setMini(true) }} />
                }
            </div>
            <div className='miniMenu' id='miniMenu'>
                <NavLink to={'/'} onClick={toTop}>Home</NavLink>
                <NavLink to={'/anthem'} onClick={toTop}>Anthem</NavLink>
                <NavLink to={'/locations'} onClick={toTop}>Best Locations</NavLink>
            </div>
        </div>
    )
}
