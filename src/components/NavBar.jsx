import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function NavBar({ handleSection }) {
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

    function handleClick(section) {
        handleSection(section);
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
                        <li><button onClick={() => handleClick('About')}>About Me</button></li>
                        <li><button onClick={() => handleClick('Project')}>Projects</button></li>
                        <li><button onClick={() => handleClick('Contacts')}>Contact</button></li>
                        <li><button onClick={() => handleClick('Resume')}>Resume</button></li>
                        <li><button onClick={() => handleClick('MyPhotography')}>My Photography</button></li>
                    </ul>
                </div>
            )}
        </>
    );

    const desktopNavBar = (
        <nav className="desktopNavBar">
            <p>Pranay Netha Guda</p>
            <ul>
                <li><button onClick={() => handleClick('About')}>About Me</button></li>
                <li><button onClick={() => handleClick('Project')}>Projects</button></li>
                <li><button onClick={() => handleClick('Contacts')}>Contact</button></li>
                <li><button onClick={() => handleClick('Resume')}>Resume</button></li>
                <li><button onClick={() => handleClick('MyPhotography')}>My Photography</button></li>
            </ul>
        </nav>
    );

    return createPortal(
        isMobile ? mobileNavBar : desktopNavBar,
        document.getElementById('navBar')
    );
}
