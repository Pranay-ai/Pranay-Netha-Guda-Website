import React from 'react';
import reactImg from '/pranay.jpg';
import github from '/github-mark.png';
import linkedln from '/linkedln.png';
import leetcode from '/leetcode.svg';

export default function About() {
    return (
        <div className='AboutSection'>
            <div className="About">
                <img src={reactImg} alt="Pranay Netha" />
                <div className="aboutme">
                    <h1>About Me</h1>
                    <p>Hello! I'm Pranay Netha, a full-stack developer with a zest for crafting digital experiences. I develop web applications using React, work with deep learning algorithms in TensorFlow, and apply C++ OOPs concepts to create efficient solutions. But that's not all - I'm also a coffee connoisseur, sipping inspiration from every cup. My passion for technology is matched only by my curiosity to explore new horizons. I'm on the lookout for opportunities that challenge me, collaborations that excite me, and conversations that enlighten me. If you're in search of a developer with a creative spark and a drive for innovation, you've come to the right place. Let's brew some ideas together!</p>
                </div>
            </div>

            <div className='WebsiteLinks'>
                <a className="linkButton" href="https://github.com/Pranay-ai" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" /> Github
                </a>
                <a className="linkButton" href="https://www.linkedin.com/in/pranay-netha-guda/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedln} alt="LinkedIn" /> LinkedIn
                </a>
                <a className="linkButton" href="https://leetcode.com/pranay864/" target="_blank" rel="noopener noreferrer">
                    <img src={leetcode} alt="LeetCode" /> LeetCode
                </a>
            </div>
        </div>
    );
}
