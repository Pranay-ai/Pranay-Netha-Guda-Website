import ProjectCard from "./ProjectCard";
import reactImage from "../assets/react.svg";
import leftArrow from "../assets/left-arrow-svgrepo-com (1).svg";
import sentimentImage from "../assets/sentiment_analysis_web_app.jpg";
import blogImage from "../assets/blog_summarization_app.jpg";
import todoImg from "../assets/react_todo_list_app.jpg";
import noisyImage from "../assets/gan_clean_noisy_image_pair.jpg";
import {useState} from "react";
export default function ProjectSection() {
    const data=[
        {imgSrc:noisyImage,title:"Realistic Noisy Image Generation with GAN for Image Denoising",description:"Currently working on an innovative project that involves generating realistic noisy images using a Generative Adversarial Network (GAN) with a Pix2Pix architecture. The goal of this project is to create a diverse dataset of noisy images that can be used to train and improve the performance of image denoising models. By leveraging the power of GANs, we aim to simulate various noise patterns and intensities, providing a valuable resource for developing more robust and effective image denoising techniques."},
    {imgSrc:sentimentImage,title:"Sentiment Analysis Web Application",description:"Developed a sentiment analysis web application using HTML, CSS, Python, and AWS SageMaker. This application enables users to analyze the sentiment of text inputs, providing valuable insights into user opinions and feedback. Integrated a machine learning model with AWS API Gateway to create a RESTful API, ensuring seamless communication between the front-end and the back-end. This project demonstrates my ability to leverage cloud services and machine learning to build practical and scalable web applications."},
    {imgSrc:blogImage,title:"Blog Summarization Using NLP",description:"Developed a Python application leveraging Flask to extract and summarize content from website URLs, enhancing content accessibility. Utilized the pre-trained PEGASUS model, implemented with TensorFlow and Keras, for abstractive text summarization, resulting in high-quality blog summaries. This project showcases my ability to apply natural language processing techniques to create valuable tools for content curation and summarization."},
    {imgSrc:todoImg,title:"React Todo List with Google Calendar Integration",description:"Developed a dynamic React Todo List application that allows users to create multiple lists and add todo components. Integrated with Google Calendar, the application enables users to synchronize their tasks with their calendar, providing a seamless and organized experience. This project demonstrates my proficiency in React and my ability to integrate third-party APIs for enhanced functionality."}
]



const [currentProject,setCurrentProject]=useState(0)
const [isAnimating, setIsAnimating] = useState(false);
console.log(currentProject)
function handleClick(direction) {
    setIsAnimating(true); // Trigger animation
    setTimeout(() => {
        if (direction === 'inc') {
            setCurrentProject(prevCurrentProject => Number(prevCurrentProject + 1));
        } else {
            setCurrentProject(prevCurrentProject => Number(prevCurrentProject - 1));
        }
        setIsAnimating(false); // Reset animation after transition
    }, 600); // Adjust timing based on your transition duration
}
    return (
        <>
        <div className="ProjectDiv">
        <h1>PROJECTS</h1>
        <div className='ProjectSection'>
            
            <ProjectCard className={`ProjectCard ${isAnimating ? 'animated' : ''}`} imageSrc={data[currentProject].imgSrc} title={data[currentProject].title} description={data[currentProject].description}></ProjectCard>
            <div className="ArrowSection"> 
                <button onClick={()=>handleClick('dec')} disabled={currentProject===0} className={`BtnArrow ${currentProject===0 ? 'hidden': ''}`}><img className="Arrow" src={leftArrow} alt="" /></button>
                <button onClick={()=>handleClick('inc')}  disabled={currentProject===3} className={`BtnArrow ${currentProject===3 ? 'hidden': ''}`}><img className="Arrow Mirror" src={leftArrow} alt="" /></button>
            </div>
           
        </div>
        </div>
        
        </>

    )

}