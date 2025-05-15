import resume from './components/FileDownloader/pdfs/KaufmanResume.pdf';

import coverPhoto from './photos/immersionheadshot.jpg';

const local = process.env.LOCAL;
// const urlbase = local ? '' : '/website';
const urlbase = ''
console.log(local);
const pages = [
  {
    name: 'Home',
    href: `${urlbase}/`,
  },
  {
    name: 'Projects',
    href: `${urlbase}/projects`,
  },
  {
    name: 'Education',
    href: `${urlbase}/education`,
  },
  {
    name: 'Work Experience',
    href: `${urlbase}/experience`,
  },
  {
    name: 'Hardware',
    href: `${urlbase}/hardware`,
  },
];

const links = [
  {text:'GitHub', href:"https://github.com/Ernulphus"},
  {text:'LinkedIn', href:"https://www.linkedin.com/in/boaz-kaufman-4281b0174/"},
  {text:'Substack', href:"https://boazkaufman.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile"},
  {text:'Undergraduate Thesis', href:"https://eportfolios.macaulay.cuny.edu/kaufmanspringboard/"},      
];

const pdfs = [
  {text: 'Resume', href: resume, filename: 'KaufmanResume.pdf'},
];

const sk = {
  JS: 'JavaScript',
  REACT: 'React',
  PYTHON: 'Python',
  FLASK: 'Flask',
  GIT: 'Git',
  BASH: 'Bash',
  TF: 'TensorFlow',
  CPP: 'C++',
  AT: 'Automata Theory',
  GODOT: 'Godot',
  SQL: 'SQL',
  MONGO: 'MongoDB',
  HTML: 'HTML',
  CSS: 'CSS',
};

const projects = [
  {
    name: 'DataMixMaster',
    href: "https://www.datamixmaster.com/",
    skills: [sk.JS, sk.REACT, sk.HTML, sk.CSS, sk.PYTHON, sk.FLASK, sk.GIT, sk.BASH, sk.SQL, sk.MONGO],
    desc: 'Data congregation and analysis tool. Full stack work.'
  },
  {
    name: 'Library of Trans Alexander Site',
    href: "https://libraryoftransalexander.org",
    skills: [sk.JS, sk.REACT, sk.GIT, sk.BASH, sk.HTML, sk.CSS],
    desc: "Website for Avry Denholtz's Library of Transmasculine Alexander project",
  },
  {
    name: 'SFA Knowledge Hub',
    href: "https://sfa-frontend.herokuapp.com/",
    skills: [sk.JS, sk.REACT],
    desc: 'Custom frontend for the Structured Finance Association, via DataMixMaster.'
  },
  {
    name:'Undergraduate CS Capstone',
    href:"https://github.com/Ernulphus/capstone-Bsharp-AI",
    skills: [sk.REACT, sk.GIT, sk.BASH, sk.PYTHON, sk.JS, sk.TF],
    desc: 'Trained a tree ensemble of convolutional neural networks using TensorFlow.py to classify images of musical instruments. A root model classifies images first by orchestra section, then the appropriate specialized model classifies it as a specific instrument. Scraped training images from the web using BeautifulSoup and Selenium; manipulated images using Pillow. Wrote additional shell scripts in bash to track statistics and clean data. Collaborative project with Mashroor Ali, Jona Chen, and Sam Gustafsson'
  },
  {
    name: 'Chomsky Abnormal Form',
    href: "https://github.com/Ernulphus/Chomsky-Abnormal-Form",
    skills: [sk.REACT, sk.JS, sk.AT],
    desc: 'Website that mimics Evan Wallace\'s Finite State Machine designer but you can actually run the resulting machine on a string. RegEx section by Sasha Ebersole.'
  },
  {
    name:'C++ Knight\'s Tour',
    href:"https://github.com/Ernulphus/Knights-Tour-Cpp",
    skills: [sk.CPP],
    desc: 'Interactive solution to the Knight\'s Tour problem in C++. Works for different sized chessboards.'
  },
  {
    name:'C++ Turing Machine Simulator',
    href:"https://github.com/Ernulphus/TuringMachineSim",
    skills: [sk.AT, sk.CPP],
    desc: 'Interactive simulator of a Turing machine. See documentation for writing your own programs!'
  },
  {
    name:'Python Web Browser',
    href:"https://github.com/Ernulphus/whimsical-browser",
    skills: [sk.PYTHON],
    desc: 'WIP homemade web browser written in Python.'
  },
  {
    name:'PySpeed',
    href:"https://github.com/Ernulphus/speed",
    skills: [sk.PYTHON],
    desc: 'Python version of the card game Speed.'
  },
  {
    name:'Campus Management',
    href:"https://github.com/Ernulphus/final-client",
    skills: [sk.REACT, sk.JS],
    desc: 'React demo showing off CRUD control of a campus database.'
  },
  {
    name:'Mock Bank Account',
    href:"https://ernulphus.github.io/bor/",
    skills: [sk.REACT, sk.JS],
    desc: 'React demo showing off preserving state in a single-page app.'
  },
  {
    name:'Laser Chess',
    href:"https://github.com/Ernulphus/winter-2020-codefest-submissions-team-cool",
    skills: [sk.GODOT],
    desc: 'Like chess, but with lasers! Based on the ThinkFun board game based on the 1987 program by Mike Duppong. Features five starting board configurations and original music by myself and Sasha Ebersole.'
  },
]

const education = [
  {
    name:'UC Berkeley School of Information',
    location: 'Remote',
    dates: 'May 2024 - April 2026 (expected)',
    degree: 'Masters of Information and Cyber Security (MICS)',
    gpa: '4.0',
  },
  {
    name:'Macaulay Honors College at Hunter College',
    location: 'New York, NY',
    dates: 'Aug. 2018 - June 2022',
    degree: 'Bachelor of Arts',
    majors: 'Computer Science and Classical Studies',
    minors: 'Music and Mathematics',
    honors: ['ΦBK', 'EΣΦ'],
    gpa: '3.885'
  },
]

const employment = [
  {
    name: 'DataMixMaster, LLC',
    location: 'Remote',
    dates: 'Aug. 2023 - Present',
    title: 'Full stack web developer',
    skills: [sk.REACT, sk.FLASK, sk.GIT, sk.BASH, sk.JS, sk.HTML, sk.CSS],
  },
  {
    name: 'East Harlem Scholars High School',
    location: 'New York, NY',
    dates: 'Aug. 2022 - Oct. 2023',
    title: 'Computer Science Teacher',
    skills: [sk.PYTHON]
  },
  {
    name: 'NYCDOE Security Incident Response Team',
    location: 'New York, NY',
    dates: 'June 2022 - Aug. 2022',
    title: 'Incident Response Intern',
    skills: ['Incident response', 'Devo SIEM', 'XSOAR', 'MS Defender'],
  },
  {
    name: 'East Harlem Tutorial Program',
    location: 'New York, NY',
    dates: 'Oct. 2021 - June 2022',
    title: 'Afterschool Web Dev Instructor',
    skills: [sk.JS, sk.HTML, sk.CSS],
  },
  {
    name: 'CUNY Hunter College',
    location: 'New York, NY',
    dates: 'Sept. 2021 - Dec. 2021',
    title: 'Computer Theory TA/Tutor',
    skills: ['Automata theory', 'Turing machines', 'Regular expressions']
  },
  {
    name: 'Art of Problem Solving Initiative',
    dates: 'Dec. 2020 - Oct. 2021',
    title: 'Entry Points Instructor',
  },
  {
    name: 'Bridge to Enter Advanced Mathematics',
    dates: 'Summers, July 2019 - Aug. 2021',
    title: 'Counselor and TA',
  },
  {
    name: 'Columbia Achievement Initiative',
    title: 'STEM Tutor',
    dates: 'Feb. 2020 - June 2020',
  },
  {
    name: 'USA Math Talent Search',
    title: 'Grader',
    dates: 'Fall 2019, 2020',
  }
]

const machines = [
  {
    name: 'Tethys',
    desc: 'Lenovo IdeaPad 1 15ALC7. AMD Ryzen 7 5700U with Radeon Graphics × 16. 16GB RAM. Dual booted Windows 11 / Ubuntu. Main laptop for most of my work and personal projects. Named for the Greek titan of rivers.'
  },
  {
    name: 'Gaea',
    desc: 'My desktop, originally built with my bar mitzvah money and Ship of Theseus\'d many times. AMD Ryzen 5 5600X, RTX3060 VENTUS 3X 12G. 8GB RAM. Dual booted Windows 11 / Ubuntu. Named for the Greek titan of the earth.'
  },
  {
    name: 'Vesta',
    desc: 'Red Polaroid Go gen 2 camera. Named for the Roman goddess of the hearth.',
  },
  {
    name: 'Latona',
    desc: 'White Polaroid Now+ camera. Named for the Roman goddess of light.',
  },
  {
    name: 'Fulgora',
    desc: 'Gray Polaroid Impulse camera. Named for the Roman goddess of lightning.',
  },
  {
    name: 'Fiona',
    desc: 'Canon Rebel Xt',
  },
]

const contacts = [
        {text:'email', value:'bk1nyc@gmail.com'},
        {text:'C', value:'(917) 868-3732'},
]

const bioText = (
  <>
    <h3>
    Boaz Kaufman is an engineer based in New York City who helps individuals and businesses create beautiful, functional, and safe websites and software. </h3>
    <p>Boaz graduated magna cum laude from CUNY Macaulay Honors College at Hunter College in 2022 majoring in Computer Science and currently studies cybersecurity at UC Berkeley. They are a lead software engineer at DataMixMaster, LLC. Boaz offers a variety of services:
    </p>
    <ul>
      <li>Elevating private companies with full-stack engineering expertise.</li>
      <li>Security and privacy hardening and compliance for businesses and individuals.</li>
      <li>Personal or enterprise website design and creation. Cheaper over time than services like Wix and Google Sites, with an expert touch!</li>
    </ul>
    <p>
      Get in touch to discuss what you or your business needs. After a free initial consultation to determine project requirements, development will start immediately and you'll receive updates every step of the way.</p>
    <p>
      Compensation is based on project scope and ability to pay. Static personal sites start at $200, including one year of registration for a custom domain name.
    </p>
  </>
)

export {
  bioText,
  contacts,
  coverPhoto,
  education,
  employment,
  links,
  machines,
  pages,
  pdfs,
  projects,
}