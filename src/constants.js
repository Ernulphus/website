const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/Projects',
  },
  // {
  //   name: 'Education',
  //   href: 'website/Education',
  // },
  // {
  //   name: 'Work Experience',
  //   href: 'website/Experience',
  // },
];

const links = [
        {text:'GitHub', href:"https://github.com/Ernulphus"},
        {text:'LinkedIn', href:"https://www.linkedin.com/in/boaz-kaufman-4281b0174/"},
        {text:'Substack', href:"https://boazkaufman.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile"},
        {text:'Undergraduate Thesis', href:"https://eportfolios.macaulay.cuny.edu/kaufmanspringboard/"},      
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
};

const projects = [
  {
    name: 'DataMixMaster',
    href: "https://www.datamixmaster.com/",
    skills: [sk.JS, sk.REACT, sk.PYTHON, sk.FLASK, sk.GIT, sk.BASH, sk.SQL, sk.MONGO],
    desc: 'Data congregation and analysis tool. Full stack work.'
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
    name:'Macaulay Honors College at Hunter College',
    location: 'New York, NY',
    dates: 'Aug. 2018 - June 2022',
    degree: 'Bachelor of Arts',
    majors: 'Computer Science and Classical Studies',
    minors: 'Music and Mathematics',
    honors: ['ΦBK', 'EΣΦ'],
    gpa: '3.885'
  },
  {
    name:'UC Berkeley School of Information',
    location: 'Remote',
    dates: 'May 2024 - April 2026 (expected)',
    degree: 'Masters of Information and Cyber Security (MICS)',
    gpa: '4.0',
  },
]

const employment = [
  {
    name: 'DataMixMaster, LLC',
    location: 'Remote',
    dates: 'Aug. 2023 - Present',
    title: 'Full stack web developer',
    skills: [sk.REACT, sk.FLASK, sk.GIT, sk.BASH, sk.JS],
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
    dates: 'June - Aug. 2022',
    title: 'Incident Response Intern',
    skills: ['Incident response', 'Devo SIEM', 'XSOAR', 'MS Cloud App Security'],
  },
  {
    name: 'CUNY Hunter College',
    location: 'New York, NY',
    dates: 'Sept. 2021 - Dec. 2021',
    title: 'Computer Theory TA/Tutor',
    skills: ['Automata theory', 'Turing machines', 'Regular expressions']
  }
]

const contacts = [
        {text:'email', value:'bk1nyc@gmail.com'},
        {text:'C', value:'(917) 868-3732'},
]

const bioText = (
  <>
    <h2>Boaz Kaufman</h2>
    <p>
    is a Python, C++, and JavaScript programmer based in New York City. They graduated magna cum laude from CUNY Macaulay Honors College at Hunter College in 2022 majoring in Computer Science and Classical Studies and minoring in Music and Mathematics. After college, they interned at the Department of Education's Security Incident Response Team, where they investigated and remediated compromised user accounts on a network of several million hosts. They taught computer science at East Harlem Scholars Academy High School for the 2022-2023 school year and currently work as a software engineer for DataMixMaster. Boaz is also enrolled in UC Berkeley's remote Masters in Information and Cyber Security program, class of Spring 2026. When they aren't programming, they read science fiction, yo-yo, and take pictures with one of their instant cameras.
    </p>
  </>
)

export {
  pages,
  links,
  projects,
  education,
  employment,
  contacts,
  bioText,
}