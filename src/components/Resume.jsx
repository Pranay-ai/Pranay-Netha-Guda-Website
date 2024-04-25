import resumefile from '/PranayGudaResume-pdf.pdf';
export default function Resume() {
    return (

    <div className="ResumeSection">
        <div class="container">
        <header>
            <h1>Pranay Netha</h1>
            <p>Computer Science Graduate</p>
            <nav>
                <ul>
                    <li><a href="https://github.com/Pranay-ai">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/pranay-netha-guda/">LinkedIn</a></li>
                </ul>
            </nav>
        </header>
        <section class="contact-info">
            <h2>Contact Information</h2>
            <p>3100 Yorba Linda Blvd, Fullerton, CA</p>
            <p>Phone: 209 707 8888</p>
            <p>Email: gudapranaynetha@gmail.com</p>
        </section>
        <section class="education">
            <h2>Education</h2>
            <div class="education-item">
                <h3>California State University, Fullerton</h3>
                <p>Master of Science, Computer Science | GPA: 3.92/4.0 | May 2024</p>
            </div>
            <div class="education-item">
                <h3>Sreenidhi Institute of Science and Technology, Hyderabad, India</h3>
                <p>Bachelor of Engineering in Electronics | GPA: 8.12/10 | June 2022</p>
            </div>
        </section>
        <section class="technical-skills">
    <h2>Technical Skills</h2>
    <ul>
        <li><strong>Languages:</strong> Java, Python, C, C++, JavaScript, HTML and CSS, SQL</li>
        <li><strong>Frameworks:</strong> React, TensorFlow</li>
        <li><strong>Databases:</strong> RDMS(SQL), NO-SQL(Spark)</li>
        <li><strong>Version Control:</strong> Git (GitHub)</li>
        <li><strong>Technologies:</strong> Web Development, Artificial Intelligence, Cloud Computing</li>
        <li><strong>Misc.:</strong> Data Structures and Algorithms, AWS</li>
    </ul>
</section>
<section class="experience">
    <h2>Experience</h2>
    <div class="experience-item">
        <h3>California State University, Fullerton</h3>
        <p>Teaching Associate (Department of Computer Science) | January 2024</p>
        <ul>
            <li>Emphasized hands-on learning by incorporating code walkthroughs, debugging exercises, and collaborative coding projects, leading to a demonstrated increase in student proficiency in C++ implementation of data structures.</li>
            <li>Presented innovative teaching methods at departmental and regional conferences, contributing to the advancement of effective data structures education using C++.</li>
        </ul>
    </div>
    <div class="experience-item">
        <h3>California State University, Fullerton</h3>
        <p>Lab Assistant (Department of Computer Science) | August 2023 - January 2024</p>
        <ul>
            <li>Conducted and led various lab sessions for C++ programming, providing hands-on guidance to students in understanding and solving complex coding challenges.</li>
            <li>Designed and created assignments and C++ programming projects tailored to boost students' problem-solving skills and reinforce key concepts in computer science.</li>
        </ul>
    </div>
    <div class="experience-item">
        <h3>Tata Consultancy Services TCS, Hyderabad, India</h3>
        <p>Intern | May 2021 - May 2022</p>
        <ul>
            <li>Led the design and development of a feature-rich, interactive web application for real-time vehicle diagnostics, utilizing HTML, CSS, JavaScript, and React.</li>
            <li>Enhanced user experience by implementing responsive web design principles, ensuring seamless functionality across various devices and platforms.</li>
            <li>Collaborated with backend developers to integrate RESTful APIs, significantly improving data retrieval efficiency and system scalability. </li>

        </ul>
    </div>
</section>
<a href={resumefile} download="Pranay_Netha_Resume.pdf" class="download-button">Download Resume</a>


    </div>
    </div>

    )

}