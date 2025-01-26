// Make array with links
const links = [
        {text:'GitHub', href:"https://github.com/Ernulphus"},
        {text:'LinkedIn', href:"https://www.linkedin.com/in/boaz-kaufman-4281b0174/"},
        {text:'Substack', href:"https://boazkaufman.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile"},
        {text:'Undergraduate Thesis', href:"https://eportfolios.macaulay.cuny.edu/kaufmanspringboard/"},
        
]

const projects = [
  {
    name: 'DataMixMaster',
    href: "https://www.datamixmaster.com/",
  },
  {
    name: 'SFA Knowledge Hub',
    href: "https://sfa-frontend.herokuapp.com/"
  },
  {
    name:'Undergraduate CS Capstone',
    href:"https://github.com/Ernulphus/capstone-Bsharp-AI",
  },
  {
    name:'C++ Knight\'s Tour',
    href:"https://github.com/Ernulphus/Knights-Tour-Cpp",
  },
  {
    name:'C++ Turing Machine Simulator',
    href:"https://github.com/Ernulphus/TuringMachineSim",
  },
  {
    name:'Python Web Browser',
    href:"https://github.com/Ernulphus/whimsical-browser",
  },
  {
    name:'PySpeed',
    href:"https://github.com/Ernulphus/speed",
  },
  {
    name:'Campus Management',
    href:"https://github.com/Ernulphus/final-client",
  },
  {
    name:'Mock Bank Account',
    href:"https://ernulphus.github.io/bor/"
  },
  {
    name:'Laser Chess',
    href:"https://github.com/Ernulphus/winter-2020-codefest-submissions-team-cool",
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
    skills: ['React.js', 'Flask', 'git', 'bash', 'Javascript'],
  },
  {
    name: 'East Harlem Scholars High School',
    location: 'New York, NY',
    dates: 'Aug. 2022 - Oct. 2023',
    title: 'Computer Science Teacher',
    skills: ['Python']
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
  links,
  projects,
  education,
  employment,
  contacts,
  bioText,
}