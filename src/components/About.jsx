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
                    <p>Hi, I'm Pranay Netha. I'm a full stack developer with a passion for web development. I have experience with React, Node.js, Express, and MongoDB. I'm always looking to learn new technologies and improve my skills. I'm currently looking for new opportunities, so feel free to contact me if you have any questions or would like to work together.</p>
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
