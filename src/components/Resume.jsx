import resumefile from '../../public/MyClicks/resume.pdf';

export default function Resume() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Pranay Netha Guda</h1>
                    <p className="text-xl text-gray-600">Computer Science Graduate</p>
                    <nav className="mt-4">
                        <ul className="flex justify-center space-x-6">
                            <li>
                                <a href="https://github.com/Pranay-ai" className="text-blue-500 hover:text-blue-700">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/pranay-netha-guda/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                    <p>3100 Yorba Linda Blvd, Fullerton, CA</p>
                    <p>Phone: 209-707-8888</p>
                    <p>Email: gudapranaynetha@gmail.com</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">California State University, Fullerton</h3>
                        <p>Master of Science in Computer Science | GPA: 3.92/4.0 | August 2022 – May 2024</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Sreenidhi Institute of Science and Technology, Hyderabad, India</h3>
                        <p>Bachelor of Engineering in Electronics | GPA: 8.12/10 | August 2018 – June 2022</p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Languages:</strong> Python, C++, JavaScript, HTML/CSS, TypeScript</li>
                        <li><strong>Frameworks:</strong> React, Next.js, TensorFlow, AWS, AWS SageMaker, Redux, Axios, Bootstrap, WebRTC, Tailwind CSS, GraphQL, Node.js</li>
                        <li><strong>DevOps:</strong> Jenkins, Docker, Kubernetes</li>
                        <li><strong>Databases:</strong> SQL, MySQL, PostgreSQL</li>
                        <li><strong>Version Control:</strong> Git (GitHub)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Teaching Associate</h3>
                        <p>California State University, Fullerton | January 2024 – May 2024</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Mentored 50 students in web development courses focusing on JavaScript and ReactJS, achieving a 25% increase in proficiency.</li>
                            <li>Developed course materials and conducted labs, leading to a 20% boost in project completion rates.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Lab Assistant</h3>
                        <p>California State University, Fullerton | August 2023 – January 2024</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Conducted lab sessions for C++ programming for 30 students, providing hands-on guidance and enhancing practical skills by 30%.</li>
                            <li>Designed assignments and projects tailored to real-world scenarios, resulting in a 40% increase in high exam scores and 30% improvement in engagement.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Intern Developer</h3>
                        <p>Tata Consultancy Services (TCS), Hyderabad, India | January 2022 – June 2022</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Formulated a real-time vehicle diagnostics web application using HTML, CSS, JavaScript, and React, increasing diagnostic processing efficiency by 30%.</li>
                            <li>Elevated mobile user engagement by 25% with responsive design principles, ensuring seamless functionality across devices.</li>
                            <li>Enhanced data retrieval and boosted system scalability by 40% through integrating RESTful APIs using Axios.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Intern Developer</h3>
                        <p>Manac Infotech, Hyderabad, India | May 2021 – November 2021</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Created a front-end web application using React, improving user interaction and engagement by 20%.</li>
                            <li>Optimized performance by leveraging advanced React features (hooks, context API) to manage state and lifecycle, reducing page load times by 35%.</li>
                            <li>Facilitated seamless data flow by collaborating with back-end developers to integrate APIs, improving data retrieval speed by 30%.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Video Chat App Using React and WebRTC</h3>
                        <p>React, WebRTC, Firebase | April 2024 – May 2024</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Spearheaded a real-time video chat application using React, WebRTC, and Firebase for signaling, supporting 200 concurrent users and enhancing communication efficiency by 40%.</li>
                            <li>Optimized state management and interface design with Redux and Bootstrap, deploying on AWS to support 1,000 users with 99.9% uptime.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Food Ordering App Using React</h3>
                        <p>React, Node.js, Redux Toolkit | March 2024 – April 2024</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Built a responsive food ordering platform with React hooks and RESTful APIs, increasing order completion rates by 30% and reducing cart abandonment.</li>
                            <li>Streamlined state management using Redux Toolkit, enhancing data flow and boosting app performance for 500 daily active users.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Sentiment Analysis Web App Using AWS SageMaker</h3>
                        <p>React, AWS SageMaker, AWS Lambda | August 2023 – December 2023</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Engineered a sentiment analysis application with React and AWS SageMaker, processing 10,000 texts daily and improving text analysis capabilities by 45%.</li>
                            <li>Constructed a REST API for the endpoint using AWS Lambda and API Gateway, facilitating interaction and reducing latency by 30%.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">React Todo List with Google Calendar Integration</h3>
                        <p>React, Google Calendar API, Redux | February 2022 – June 2022</p>
                        <ul className="list-disc list-inside ml-5">
                            <li>Designed a Todo List application with integration to Google Calendar API and Redux, improving task management for 200 users and enhancing productivity by 25%.</li>
                            <li>Created a responsive interface using CSS and Bootstrap, ensuring usability across multiple devices and increasing mobile usage by 35%.</li>
                        </ul>
                    </div>
                </section>

                <div className="text-center">
                    <a href={resumefile} download="Pranay_Netha_Resume.pdf" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
