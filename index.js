// Get references to buttons
const certificatesBtn = document.querySelector('.Internships__btn');
const educationBtn = document.querySelector('.Education__btn');
const skillsBtn = document.querySelector('.Skills__btn');
const aboutBtn = document.querySelector('.about__btn');

// Get reference to the resume right section
const resumeRight = document.querySelector('.resume_right');

// Content for different sections
const certificatesContent = `
    <h4>Certificates</h4>
    <p>Certified Full Stack Python Developer with credentials in HTML, CSS, JavaScript, and ReactJS. Demonstrated expertise through various industry-recognized certifications and ongoing professional development.</p>
    <ul>
        <li>
            <h6>Ongoing</h6>
            <h5>Python Fullstack Development Course</h5>
            <p>Qspiders</p>
        </li>
        <li>
            <h6>Completed</h6>
            <h5>FrontEnd Web Development Course</h5>
            <p>Udemy</p>
        </li>
        <li>
            <h6>Completed</h6>
            <h5>Advanced Data Analytics using Python</h5>
            <p>Udemy</p>
        </li>
    </ul>
`;

const educationContent = `
    <h4>Education</h4>
    <ul class="education">
        <li>
            <h6>2020 - 2024</h6>
            <h5>Bachelor of Technology in AI & DS</h5>
            <p>Bannari Amman Institute of Technology</p>
            <P> CPGA : 8.7</P>
        </li>
        <li>
            <h6>2019 - 2020</h6>
            <h5>Higher Secondary Education</h5>
            <p>Vivekananda Matriculation Higher Secondary School</p>
            <p>Percentage : 70%</p>
        </li>
        <li>
            <h6>2017 - 2018</h6>
            <h5>SSLC</h5>
            <p>Vivekananda Matriculation Higher Secondary School</p>
             <p>Percentage : 87.8%</p>
        </li>
    </ul>
`;

const skillsContent = `
    <h4>Skills</h4>
    <ul class="skills">
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>ReactJS</li>
        <li>SQL</li>
        <li>C</li>
         <li>Bootstrap</li>
    </ul>
`;

const aboutContent = `
    <h4>About Me</h4>
    <p>I'm Abhishiek, a passionate Full Stack Web Developer with a strong background in both frontend and backend technologies. I specialize in creating dynamic, user-friendly web applications using Python, JavaScript, HTML, CSS, ReactJS, and SQL. My expertise in SQL allows me to design and manage efficient databases, ensuring seamless data integration and retrieval in web applications.

I am committed to continuous learning and professional development, ensuring I stay updated with the latest industry trends and best practices. Beyond coding, I enjoy problem-solving and working collaboratively with teams to deliver innovative solutions. My goal is to leverage technology to create impactful user experiences and drive business success. When I'm not coding, you can find me exploring new tech, reading about the latest advancements in the tech world, or hiking in the great outdoors.</p>
`;

// Function to update content
const updateContent = (content, activeBtn) => {
    resumeRight.innerHTML = content;
    certificatesBtn.classList.remove('primary');
    educationBtn.classList.remove('primary');
    skillsBtn.classList.remove('primary');
    aboutBtn.classList.remove('primary');
    activeBtn.classList.add('primary');
};

// Set initial content
updateContent(certificatesContent, certificatesBtn);

// Add event listeners for buttons
certificatesBtn.addEventListener('click', () => {
    updateContent(certificatesContent, certificatesBtn);
});

educationBtn.addEventListener('click', () => {
    updateContent(educationContent, educationBtn);
});

skillsBtn.addEventListener('click', () => {
    updateContent(skillsContent, skillsBtn);
});

aboutBtn.addEventListener('click', () => {
    updateContent(aboutContent, aboutBtn);
});

const themeButton = document.querySelector('.nav__theme-btn');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
