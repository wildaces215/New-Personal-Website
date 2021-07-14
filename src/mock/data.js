import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Craig Albertson | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A Software devloper located in New Smyrna Beach, Volusia County, FL', // e.g: Welcome to my website
};
// Need more things for website

// HERO DATA
export const heroData = {
  title: '',
  name: 'Craig Albertson',
  subtitle: "I'm a software developer at Thinking Clearly Technologies",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headPhoto.jpg',
  paragraphOne:
    "Since getting my BA in Computer and Information Sciences, I've always loved creating websites, and apps to help people's lives easier!",
  paragraphTwo:
    "Though both my course work and my self-published projects through thinking clearly (It's a DBA that I own) I have experience with the following languages: C++,Node.js,React.js,Dart and Flutter and Python.Currently I am also learning about cyber security and data science on my free time.",
  paragraphThree:
    'Some hobbies of mine include surfing, reading, doing digital art and hanging out with friends.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'note.jpg',
    title: 'Notety Note',
    info: 'A simple note taking application used to take notes quickly. On ios, and iphone',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'oldsite.png',
    title: 'Old Portfilio Website',
    info:
      "Hand-coded with Vue.js, left it here for arhceived pruposes also showcases other projects I've done",
    info2: '',
    url: 'https://sleepy-visvesvaraya-f67d6d.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'thinkingclearlytech@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'linkedin.com/in/craig-albertson-3a83b218a',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wildaces215',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
