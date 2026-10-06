// Edit this file to personalise the whole site.
export const site = {
  name: "Murtaza Rafi",
  role: ["Fullstack Developer"],
  //  "AI/ML Engineer"],
  intro: [
    "Fullstack Developer with 3 years of experience building business-critical application. Strong expertise in C#, .NET Core, MySQL and Azure, with modern frontend skills in TypeScript and Vue.js/React. Proven ability to deliver in Agile/Scrum teams and resolve complex production issues independently and collaboratively.",
    , " Backed by a Master's in Engineering Mechanics from KTH, I'm now actively expanding into Python and AI/ML. Looking for roles as a Fullstack Developer or AI/ML Engineer where I can combine solid engineering practices with a growing focus on applied AI.",],
  cvUrl: "/Murtaza_Rafi_CV.pdf",
  about: [
    "I care about building technology that makes life easier, fairer and more accessible for everyone.",
    "",
    "I'm motivated by curiosity, teamwork and the drive to keep learning.",
  ],
};

export type Project = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  image?: string; // e.g. "/projects/one.png" inside /public
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Project one: short description of what it does",
    role: "Fullstack developer",
    description: "Two sentences on the problem, your solution and the result.",
    tags: [".NET", "C#", "Bootstrap", "PostgreSQL", "RESTful APIs"],
  },
  {
    title: "Project two: short description",
    role: "AI/ML engineer",
    description:
      "Describe the goal, your contribution and the outcome in plain language.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "KafféParty",
    role: "Frontend developer",
    description:
      "My first frontend website built with Bootstrap, with simple yet elegant design.",
    tags: ["Bootstrap", "HTML5", "CSS", "JavaScript"],
    image: "/Kafeparty-project.png",
  },
];
