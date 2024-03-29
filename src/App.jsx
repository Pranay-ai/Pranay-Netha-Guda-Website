import NavBar from "./components/NavBar"
import About from "./components/About"
import ProjectSection from "./components/ProjectSection"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Resume from "./components/Resume"
import MyPhotography from "./components/MyPhotography"
import {useState} from 'react'
export default function App(){
    const [currentSection,setCurrentSection]=useState('About')

    function handleClick(section){
        setCurrentSection(section)
    }
    return (
        <div>
            <NavBar handleSection={handleClick}></NavBar>
            {currentSection==='About' && <About></About>}
            {currentSection==='Project' && <ProjectSection></ProjectSection>}      
            {currentSection==='Contacts' && <ContactMe></ContactMe>}
            {currentSection==='Resume' && <Resume></Resume>}
            {currentSection==='MyPhotography' && <MyPhotography></MyPhotography>}
            <Footer></Footer>




        </div>
    )
}