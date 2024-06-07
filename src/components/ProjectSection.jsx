import React, { useState, useEffect } from 'react';
import ProjectCard from "./ProjectCard";
import leftArrow from "/left-arrow-svgrepo-com (1).svg";
import sentimentImage from "/sentiment_analysis_web_app.jpg";
import blogImage from "/blog_summarization_app.jpg";
import todoImg from "/react_todo_list_app.jpg";
import noisyImage from "/gan_clean_noisy_image_pair.jpg";

const data = [
    { imgSrc: noisyImage, title: "Realistic Noisy Image Generation with GAN for Image Denoising", description: "Currently working on an innovative project that involves generating realistic noisy images using a Generative Adversarial Network (GAN) with a Pix2Pix architecture. The goal of this project is to create a diverse dataset of noisy images that can be used to train and improve the performance of image denoising models. By leveraging the power of GANs, we aim to simulate various noise patterns and intensities, providing a valuable resource for developing more robust and effective image denoising techniques." },
    { imgSrc: sentimentImage, title: "Sentiment Analysis Web Application", description: "Developed a sentiment analysis web application using HTML, CSS, Python, and AWS SageMaker. This application enables users to analyze the sentiment of text inputs, providing valuable insights into user opinions and feedback. Integrated a machine learning model with AWS API Gateway to create a RESTful API, ensuring seamless communication between the front-end and the back-end. This project demonstrates my ability to leverage cloud services and machine learning to build practical and scalable web applications." },
    { imgSrc: blogImage, title: "Blog Summarization Using NLP", description: "Developed a Python application leveraging Flask to extract and summarize content from website URLs, enhancing content accessibility. Utilized the pre-trained PEGASUS model, implemented with TensorFlow and Keras, for abstractive text summarization, resulting in high-quality blog summaries. This project showcases my ability to apply natural language processing techniques to create valuable tools for content curation and summarization." },
    { imgSrc: todoImg, title: "React Todo List with Google Calendar Integration", description: "Developed a dynamic React Todo List application that allows users to create multiple lists and add todo components. Integrated with Google Calendar, the application enables users to synchronize their tasks with their calendar, providing a seamless and organized experience. This project demonstrates my proficiency in React and my ability to integrate third-party APIs for enhanced functionality." }
];

export default function ProjectSection() {
    const [currentProject, setCurrentProject] = useState({
        idx: 0,
        clickCount: 0
    });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 740);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 740);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleProjectClick(index) {
        if (index === currentProject.idx) {
            setCurrentProject(prev => ({
                idx: index,
                clickCount: prev.clickCount + 1
            }));
        } else {
            setCurrentProject({ idx: index, clickCount: 1 });
        }
    }

    return (
        <>
            {isMobile ? (
                <div className="flex flex-col gap-6 py-10 h-fit">
                    {data.map((project, index) => (
                        <div className="flex flex-col gap-1 h-fit" key={index}>
                            <div className="flex bg-purple-200 rounded-3xl p-5 gap-3  " onClick={() => handleProjectClick(index)}>
                                <img src={project.imgSrc} alt={project.title} className='w-2/12 rounded-full' />
                                <h1 className='text-xl font-bold'>{project.title}</h1>
                            </div>
                            {currentProject.idx === index && currentProject.clickCount % 2 !== 0 && (
                                <div className='bg-slate-100 rounded-3xl p-5'>                                 <h2>{project.description}</h2></div>

                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex pt-20 h-screen justify-between px-5 align-middle ">
                    <ProjectCard imageSrc={data[currentProject.idx].imgSrc} title={data[currentProject.idx].title} description={data[currentProject.idx].description} />
                    <div className="flex flex-col gap-4 w-6/12 h-auto py-auto">
                        {data.map((project, index) => (
                            <div className="flex bg-purple-200 rounded-3xl  gap-3  " key={index} onClick={() => handleProjectClick(index)}>
                                <img src={project.imgSrc} alt={project.title} className='w-2/12 rounded-3xl' />
                                <h1 className='text-xl mx-3 my-auto font-bold'>{project.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
