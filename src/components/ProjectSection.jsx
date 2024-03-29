import ProjectCard from "./ProjectCard";
import reactImage from "../assets/react.svg";
import leftArrow from "../assets/left-arrow-svgrepo-com (1).svg";
import {useState} from "react";
export default function ProjectSection() {
    const data=[
    {imgSrc:reactImage,title:"React Project",description:"This is a project built using React.This is a project built using React.This is a project built using React.This is a project built using React."},
    {imgSrc:reactImage,title:"Java Project",description:"This is a project built using React.This is a project built using React.This is a project built using React.This is a project built using React."},
    {imgSrc:reactImage,title:"Python Project",description:"This is a project built using React.This is a project built using React.This is a project built using React.This is a project built using React."},
    {imgSrc:reactImage,title:"C++ Project",description:"This is a project built using React.This is a project built using React.This is a project built using React.This is a project built using React."}
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
            <button onClick={()=>handleClick('dec')} disabled={currentProject===0} className={`BtnArrow ${currentProject===0 ? 'hidden': ''}`}><img className="Arrow" src={leftArrow} alt="" /></button>
            <ProjectCard className={`ProjectCard ${isAnimating ? 'animated' : ''}`} imageSrc={data[currentProject].imgSrc} title={data[currentProject].title} description={data[currentProject].description}></ProjectCard>
            <button onClick={()=>handleClick('inc')}  disabled={currentProject===3} className={`BtnArrow ${currentProject===3 ? 'hidden': ''}`}><img className="Arrow Mirror" src={leftArrow} alt="" /></button>
        </div>
        </div>
        
        </>

    )

}