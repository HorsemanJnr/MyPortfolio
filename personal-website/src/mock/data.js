import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Charles Kwanin | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Charles Junior Kwanin',
  subtitle: 'Software Engineer II @ Qualtrics',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'cj.jpg',
  paragraphOne:
    'Oberlin College 2020, B.A Computer Science, Economics minor with a Statistical Modeling concentration',
  paragraphTwo: '',
  paragraphThree: '',
  //  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'space_escape.png',
    title: 'Space Escape (Warning: Plays sound)',
    info: '2-D Puzzle Platformer in the guise of an Escape room',
    info2: '',
    url: 'http://dis.benno-lueders.de/2019SpringGames/2DPlatformer/SpaceEscape/',
    repo: 'https://github.com/charlesjkwanin/Space-Escape', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Genetic Algorithms',
    info: 'Illustrating a K-Means algorithm that chooses cluster centers using Genetic algorithm heuristics.',
    info2: '',
    url: '',
    repo: 'https://github.com/charlesjkwanin/winter-term-2020', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'charlesjkwanin@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/charles-kwanin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/charlesjkwanin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
