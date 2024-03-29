import PhotoCard from "./photoCard"
import photo1 from "../assets/MyClicks/1.jpg"
import photo2 from "../assets/MyClicks/2.jpg"
import photo3 from "../assets/MyClicks/3.jpg"
// import photo4 from "../assets/MyClicks/4.heic"
import photo5 from "../assets/MyClicks/5.jpg"
import photo6 from "../assets/MyClicks/6.jpg"
import photo7 from "../assets/MyClicks/7.jpg"
import photo8 from "../assets/MyClicks/8.jpg"
import photo9 from "../assets/MyClicks/9.jpg"
import photo10 from "../assets/MyClicks/10.jpg"
import photo11 from "../assets/MyClicks/11.jpg"
import photo12 from "../assets/MyClicks/12.jpg"
import photo13 from "../assets/MyClicks/13.jpg"
import photo14 from "../assets/MyClicks/14.jpg"

export default function MyPhotography() {

return (
    <div className="photoSection">
        <h1>My Photography</h1>
        <div className="photoGrid">  
            <PhotoCard photo={photo1}></PhotoCard>  
            <PhotoCard photo={photo2}></PhotoCard>
            <PhotoCard photo={photo3}></PhotoCard>
            <PhotoCard photo={photo5}></PhotoCard>
            {/* <PhotoCard photo={photo6}></PhotoCard> */}
            <PhotoCard photo={photo7}></PhotoCard>
            <PhotoCard photo={photo8}></PhotoCard>
            <PhotoCard photo={photo9}></PhotoCard>
            <PhotoCard photo={photo10}></PhotoCard>
            <PhotoCard photo={photo11}></PhotoCard>
            <PhotoCard photo={photo12}></PhotoCard>
            <PhotoCard photo={photo13}></PhotoCard>
            <PhotoCard photo={photo14}></PhotoCard>
        </div>
    </div>
)

}