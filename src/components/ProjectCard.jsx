export default function ProjectCard({imageSrc, title, description}) {

    return (
        <div className="flex flex-col items-center bg-purple-200 w-5/12 h-fit py-4 px-3">
            <img src={imageSrc} alt="" className="w-4/12 rounded-xl pb-3 " />
            <h1 className="text-xl font-bold font-mono text-center">{title}</h1>
            <p className="text-lg pt-7 font-semibold">{description}</p>
        </div>
    )

}