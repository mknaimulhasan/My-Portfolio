

// About Me data
const aboutMeContent = "I'm M K Naimul Hasan, a second-year computer science student at Brunel University London. An ambitious, determined individual with big dreams and having the capability to fulfil them with hard work and dedication. I am excited about grabbing opportunities to gain hands-on experience with real world problems and solutions.";

// Skills data
const skills = [
  "Java",
  "JavaScript",
  "ReactJs",
  "NodeJs",
  "HTML",
  "CSS",
  "SQL",
  "VM VirtualBox",
  "Networking and Operating Systems",
  "Agile Project Management"
  // Add more skills as needed
];

// Institution data
const institutions = [
  {
    name: "Brunel University London",
    dates: "September 2021 - June 2025",
    degree: "Bachelor of Science in Computer Science",
    year2Modules: [
      "• Algorithms & their Application",
      "• Networks & Operating Systems",
      "• Software Development & Management",
      "• Usability Engineering",
      "• Group Project",
    ],
    year1Modules: [
      "• Data & Information",
      "• Introductory Programming",
      "• Logic and Computation",
      "• Information Systems and Organisations",
      "• Group Project",
    ],
  },
  {
    name: "Cumilla Shikkha Board Govt. Model College",
    dates: "June 2018 - January 2021",
    degree: "HSC Equivalent to A-Level",
    modules: [
      "• Modules : Higher Mathematics, English, ICT, Physics, Biology and Chemistry."
    ],
    results: "• Result : Achieved GPA - 5.00 (Equivalent to grade A*) in all the modules."
  },
  {
    name: "Cumilla Zilla School, Cumilla",
    dates: "January 2012 - February 2018",
    degree: "SSC Equivalent to GCSE",
    modules: "• Modules : General and Higher Mathematics, English, ICT, Physics, Biology and Chemistry.",
    results: "• Result : Achieved GPA - 5.00 (Equivalent to grade A*) in all the modules."
  },
];

// Projects data
const projects = [
  {
    title: "FOOD4YOU - Year-2 Group Project",
    techStack: "Java, JavaScript, HTML, CSS, MySql, Springboot, Git, Bootstrap",
    description:
      ["Led the development of a web application enabling users to donate excess food by posting available items on the platform, connecting them with individuals in need and facilitating food collection through local food banks.",
      "Acquired comprehensive knowledge of full stack web development, including frontend design, backend programming, and database management, while collaborating effectively with team members using various collaborative tools and methodologies.", "Showcased the project at 'Made in Brunel Software Innovation 2023' and secured the prestigious 'Best Project' award from EMERGEIQ, recognizing the innovation, functionality, and social impact of the web-app.",],
  },
  {
    title: "SCIENTIFIC CALCULATOR - Year-1 Project",
    techStack: "Java",
    description:
      ["Designed and developed a GUI-based Scientific Calculator during the first year that met all the requirements provided by the module leader, demonstrating attention to specifications and ensuring accurate functionality." , "Expanded proficiency in Java programming language during the development of the calculator, acquiring essential skills in object-oriented programming and GUI implementation."],
  },
  {
    title: "RESTAURANT MANAGEMENT SYSTEM - Personal Project",
    techStack: "MongoDB, ExpressJs, ReactJs, NodeJs",
    description:
      ["Created a personal project - a comprehensive restaurant management system app, designed to streamline operations and enhance customer experiences through efficient food ordering, table management, and inventory tracking functionalities." ,"Successfully developed the entire project independently, showcasing proficiency in project planning, software development, problem-solving and debugging, resulting in a fully functional and user-friendly restaurant management application."],
  },
];

// Achievement data
const achievement = {
  title: "Leadership Award, Ready Programme",
  points: [
    "Collaborated with UNHCR to develop and present a Sustainable Livelihood Solution for 23000+ refugees in the Mayukwayukwa Refugees Settlement, focusing on recycling challenges and environmental sustainability.",
    "Served as Project Manager, overseeing the implementation of the solution and promoting effective waste management practices.",
    "Recognized for outstanding performance and innovative approach, receiving certification in the program’s semi-finals."
  ]
};

// Work Experience data
const workExperience = [
  {
    company: "INDETECHS SOFTWARE LIMITED - Software Developer Intern ",
    
    bulletPoints: [
      "Engage in structured training programs to acquire proficiency in programming languages, software development methodologies, and tools.",
      "Collaborate with senior software engineers on real-world projects, participating in design, coding, and software testing.",
      "Maintain technical documentation, manage project priorities, and contribute to continuous improvement initiatives, fostering team growth."
    ]
  },
  {
    company: "TACO BELL - Shift Supervisor ",
    
    bulletPoints: [
      "Exemplified exceptional leadership abilities in overseeing 20+ team members, driving superior customer service and operational excellence.",
      "Successfully managed stock counts, inventory control, daily sales tracking, and created staff rota, ensuring accurate stock levels, timely ordering of supplies, and optimized restaurant operations, resulting in enhanced customer satisfaction and positive feedback."
    ]
  },
  {
    company: "STAR TECH BD - Junior Technical Support",
  
    bulletPoints: [
      "Provided comprehensive technical support, including operating system updates, hardware repairs, and troubleshooting, resulting in efficient resolution of computer-related issues under the supervision of a technical team lead.",
      "Interacted directly with customers, delivering personalized assistance tailored to their specific needs, ensuring high levels of customer satisfaction."
    ]
  }
];

// Update about me section
const aboutMeSection = document.getElementById("about-me-container");

// Add about me content
const aboutMeContentElement = document.createElement("p");
aboutMeContentElement.textContent = aboutMeContent;

aboutMeSection.appendChild(aboutMeContentElement);

// Update skills section
const skillsSection = document.getElementById("skills");
const skillsList = document.getElementById("skills-list");

// Clear the existing content
skillsList.innerHTML = "";

// Add section heading
const sectionHeading = document.createElement("h2");

skillsSection.insertBefore(sectionHeading, skillsList);

// Add skills to the list
skills.forEach((skill) => {
  const skillItem = document.createElement("div");
  skillItem.classList.add("skill-item");
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});

// Update education section
const educationSection = document.getElementById("education");
const institutionContainer = document.getElementById("institution-container");

// Clear the existing content
institutionContainer.innerHTML = "";

// Add institution boxes
institutions.forEach((institution) => {
  const institutionBox = document.createElement("div");
  institutionBox.classList.add("institution-box");

  const institutionName = document.createElement("p");
  institutionName.classList.add("institution-name");
  institutionName.textContent = institution.name;

  const institutionDates = document.createElement("p");
  institutionDates.classList.add("institution-dates");
  institutionDates.textContent = institution.dates;

  const institutionDegree = document.createElement("p");
  institutionDegree.textContent = institution.degree;

  const institutionModules = document.createElement("p");
  institutionModules.textContent = institution.modules;

  const institutionResults = document.createElement("p");
  institutionResults.textContent = institution.results;

  institutionBox.appendChild(institutionName);
  institutionBox.appendChild(institutionDates);
  institutionBox.appendChild(institutionDegree);
  institutionBox.appendChild(institutionModules);
  institutionBox.appendChild(institutionResults);

  if (institution.year2Modules && institution.year2Modules.length > 0) {
    const year2ModulesHeading = document.createElement("h4");
    year2ModulesHeading.textContent = "Year 2 Modules";
    institutionBox.appendChild(year2ModulesHeading);

    const year2ModulesList = document.createElement("div");
    year2ModulesList.classList.add("module-list");
    institution.year2Modules.forEach((module) => {
      const moduleItem = document.createElement("p");
      moduleItem.textContent = module;
      year2ModulesList.appendChild(moduleItem);
    });
    institutionBox.appendChild(year2ModulesList);
  }

  if (institution.year1Modules && institution.year1Modules.length > 0) {
    const year1ModulesHeading = document.createElement("h4");
    year1ModulesHeading.textContent = "Year 1 Modules";
    institutionBox.appendChild(year1ModulesHeading);

    const year1ModulesList = document.createElement("div");
    year1ModulesList.classList.add("module-list");
    institution.year1Modules.forEach((module) => {
      const moduleItem = document.createElement("p");
      moduleItem.textContent = module;
      year1ModulesList.appendChild(moduleItem);
    });
    institutionBox.appendChild(year1ModulesList);
  }

  institutionContainer.appendChild(institutionBox);
});


// Update projects section
const projectsSection = document.getElementById("projects");
const projectsContainer = document.getElementById("projects-container");

// Clear the existing content
projectsContainer.innerHTML = "";

// Add section heading
const projectsHeading = document.createElement("h2");

projectsSection.insertBefore(projectsHeading, projectsContainer);

// Add project boxes
projects.forEach((project) => {
  const projectBox = document.createElement("div");
  projectBox.classList.add("project-box");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("ul");
  projectDescription.classList.add("project-description");

  project.description.forEach((point) => {
    const pointItem = document.createElement("li");
    pointItem.textContent = point;
    projectDescription.appendChild(pointItem);
  });

  projectBox.appendChild(projectTitle);
  projectBox.appendChild(projectDescription);
  projectsContainer.appendChild(projectBox);
});

// Update achievement section
const achievementSection = document.getElementById("achievement");
const achievementContainer = document.getElementById("achievement-container");

// Create the achievement box
const achievementBox = document.createElement("div");
achievementBox.classList.add("achievement-box");

// Create the achievement title
const achievementTitle = document.createElement("h3");
achievementTitle.classList.add("achievement-title");
achievementTitle.textContent = achievement.title;

// Create the bullet points for the achievement
const achievementPoints = document.createElement("ul");
achievementPoints.classList.add("achievement-points");

// Add the bullet points
achievement.points.forEach(point => {
  const listItem = document.createElement("li");
  listItem.textContent = point;
  achievementPoints.appendChild(listItem);
});

// Append the achievement title and bullet points to the achievement box
achievementBox.appendChild(achievementTitle);
achievementBox.appendChild(achievementPoints);

// Append the achievement box to the achievement container
achievementContainer.appendChild(achievementBox);

// Update work experience section
const workExperienceSection = document.getElementById("work-experience");
const workExperienceContainer = document.getElementById("work-experience-container");

// Add section heading


workExperienceSection.insertBefore(sectionHeading, workExperienceContainer);

// Add work experience boxes
workExperience.forEach((experience) => {
  const workExperienceBox = document.createElement("div");
  workExperienceBox.classList.add("work-experience-box");

  const companyTitle = document.createElement("h3");
  companyTitle.textContent = experience.company;

  const positionTitle = document.createElement("p");
  positionTitle.textContent = experience.position;

  const bulletPointsList = document.createElement("ul");
  experience.bulletPoints.forEach((bulletPoint) => {
    const bulletPointItem = document.createElement("li");
    bulletPointItem.textContent = bulletPoint;
    bulletPointsList.appendChild(bulletPointItem);
  });

  workExperienceBox.appendChild(companyTitle);
  workExperienceBox.appendChild(positionTitle);
  workExperienceBox.appendChild(bulletPointsList);
  workExperienceContainer.appendChild(workExperienceBox);
});

// custom.js

const offcanvasNavbar = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));

// Function to scroll to the section smoothly
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  const section = document.querySelector(target);

  // Close the offcanvas menu
  closeOffcanvasMenu();

  // Scroll to the section smoothly after the offcanvas menu is fully closed
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
    section.scrollIntoView({ behavior: 'smooth' });
  });
}

// Add an event listener to each link inside the offcanvas menu
const offcanvasLinks = document.querySelectorAll('#offcanvasNavbar .nav-link');
offcanvasLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Close the offcanvas menu when a link is clicked
function closeOffcanvasMenu() {
  offcanvasNavbar.hide();
}