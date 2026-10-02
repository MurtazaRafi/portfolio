// Edit this file to personalise the whole site.
export const site = {
  name: "Murtaza Rafi",
  role: ["Fullstack Developer"],
  //  "AI/ML Engineer"],
  intro:
    "I build efficient REST APIs, PostgreSQL and Supabase. Replace this with two or three sentences about you.",
  cvUrl: "/cv.pdf",
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
