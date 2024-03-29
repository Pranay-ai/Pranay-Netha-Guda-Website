export default function ProjectCard({imageSrc, title, description}) {

    return (
        <div className="ProjectCard">
            <img src={imageSrc} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )

}