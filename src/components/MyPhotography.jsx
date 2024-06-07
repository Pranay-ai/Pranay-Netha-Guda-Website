import PhotoCard from "./photoCard";
import photo1 from "/MyClicks/1.jpg";
import photo2 from "/MyClicks/2.jpg";
import photo3 from "/MyClicks/3.jpg";
import photo5 from "/MyClicks/5.jpg";
import photo6 from "/MyClicks/6.jpg";
import photo7 from "/MyClicks/7.jpg";
import photo8 from "/MyClicks/8.jpg";
import photo9 from "/MyClicks/9.jpg";
import photo10 from "/MyClicks/10.jpg";
import photo11 from "/MyClicks/11.jpg";
import photo12 from "/MyClicks/12.jpg";
import photo13 from "/MyClicks/13.jpg";
import photo14 from "/MyClicks/14.jpg";

export default function MyPhotography() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-purple-300 to-indigo-300 min-h-screen items-center p-5">
      <h1 className="text-white text-3xl pt-5 font-mono">My Photography</h1>
      <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 mt-5">
        <PhotoCard photo={photo1} />
        <PhotoCard photo={photo2} />
        <PhotoCard photo={photo3} />
        <PhotoCard photo={photo5} />
        <PhotoCard photo={photo6} />
        <PhotoCard photo={photo7} />
        <PhotoCard photo={photo8} />
        <PhotoCard photo={photo9} />
        <PhotoCard photo={photo10} />
        <PhotoCard photo={photo11} />
        <PhotoCard photo={photo12} />
        <PhotoCard photo={photo13} />
        <PhotoCard photo={photo14} />
      </div>
    </div>
  );
}
