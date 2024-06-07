import React from 'react';
import reactImg from '/pranay.jpg';
import github from '/github-mark.png';
import linkedln from '/linkedln.png';
import leetcode from '/leetcode.svg';

export default function About() {
    return (
        <div className='flex flex-col gap-8  pt-10 h-fit lg:h-screen   items-center justify-around xl:gap-28 '>
            <div className="flex flex-col gap-5 items-center xl:flex-row xl:justify-evenly">
                <img src={reactImg} alt="Pranay Netha" className='px-2 rounded-3xl w-full md:w-6/12 lg:w-2/3 xl:w-1/3' />
                <div className="flex flex-col items-center md:w-2/3 lg:w-7/12 xl:w-2/6 xl:justify-between">
                    <h1 className='text-3xl text-gray-800 font-bold'>About Me</h1>
                    <p className=' px-2 text-xl text-justify text-black font-bold fonot-mono' >Hello! I'm Pranay Netha, a full-stack developer specializing in React and modern web technologies. My technical toolkit also includes robust C++ OOPs concepts, enhancing the efficiency of web solutions I develop. Beyond coding, I am a passionate coffee connoisseur, drawing creative inspiration from each brew. I thrive on challenging projects, collaborative opportunities, and engaging discussions that push the boundaries of web development. If you're looking for a developer with a knack for innovation and a commitment to excellence, let's connect and brew some brilliant ideas together!</p>
                </div> 
            </div>

            <div className='flex justify-between pb-4 md:w-5/12 lg:w-8/12  w-11/12 xl:w-4/12'>
                <a className="text-xl items-center flex flex-col" href="https://github.com/Pranay-ai" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub"  className='w-10' /> Github
                </a>
                <a className="text-xl items-center flex flex-col" href="https://www.linkedin.com/in/pranay-netha-guda/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedln} alt="LinkedIn"  className='w-10'/> LinkedIn
                </a>
                <a className="text-xl items-center flex flex-col" href="https://leetcode.com/pranay864/" target="_blank" rel="noopener noreferrer">
                    <img src={leetcode} alt="LeetCode" className='w-10' /> LeetCode
                </a>
            </div>
        </div>
    );
}
