import PhotoCard from "./photoCard"
import photo1 from "/MyClicks/1.jpg"
import photo2 from "/MyClicks/2.jpg"
import photo3 from "/MyClicks/3.jpg"
// import photo4 from "../assets/MyClicks/4.heic"
import photo5 from "/MyClicks/5.jpg"
import photo6 from "/MyClicks/6.jpg"
import photo7 from "/MyClicks/7.jpg"
import photo8 from "/MyClicks/8.jpg"
import photo9 from "/MyClicks/9.jpg"
import photo10 from "/MyClicks/10.jpg"
import photo11 from "/MyClicks/11.jpg"
import photo12 from "/MyClicks/12.jpg"
import photo13 from "/MyClicks/13.jpg"
import photo14 from "/MyClicks/14.jpg"

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