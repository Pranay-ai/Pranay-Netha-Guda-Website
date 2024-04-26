import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
            setIsMenuOpen(false); // Close menu on resize to prevent layout break
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleClick() {
        setIsMenuOpen(false); // Close menu after selection on mobile
    }

    const mobileNavBar = (
        <>
            <nav className="mobileNavBar">
                <h2>Pranay Netha Guda</h2>
                <button className="menuToggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="menuIcon"></span>
                </button>
            </nav>
            {isMenuOpen && (
                <div className="mobileMenu">
                    <ul>
                        <li><button onClick={()=>handleClick()}><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={""}>About Me</NavLink>  </button></li>
                        <li><button onClick={()=>handleClick()}><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/project"}> Projects</NavLink> </button></li>
                        <li><button onClick={()=>handleClick()}><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/contact"}>  Contact</NavLink></button></li>
                        <li><button onClick={()=>handleClick()}><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/resume"}> Resume</NavLink> </button></li>
                        <li><button onClick={()=>handleClick()}><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/myphotography"}>  My Photography</NavLink>  </button></li>
                    </ul>
                </div>
            )}
        </>
    );

    const desktopNavBar = (
        <nav className="desktopNavBar">
            <p>Pranay Netha Guda</p>
            <ul>
                <li><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={""}>About Me</NavLink>  </li>
                <li><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/project"}> Projects</NavLink> </li>
                <li><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/contact"}>  Contact</NavLink></li>
                <li><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/resume"}> Resume</NavLink> </li>
                <li><NavLink  className={({isActive})=> isActive ? 'active': ''}     to={"/myphotography"}>  My Photography</NavLink>  </li>
            </ul>
        </nav>
    );

    return createPortal(
        isMobile ? mobileNavBar : desktopNavBar,
        document.getElementById('navBar')
    );
}
