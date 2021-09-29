import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Solana Towers NFT', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'The first Utility NFT. Metaverse Real Estate Investing with NFTs', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'The first Utility NFT ',
  name: 'Solana Towers',
  subtitle: 'Breaching the gap between metaverse and NFTs',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'room8.png',
  paragraphOne:
    'We aim to be the first investors in the metaverse real estate industry and acquire and develop exclusive locations in Decentraland/Sandbox.',
  paragraphTwo:
    'This project is a venture membership, which will enable everyone to be part of the ST Club and receive royalties, make decisions and take ownership of their space.',
  paragraphThree:
    'The metaverse is an incredible place and being at the forefront of the revolution, will allow us to play a leading role in shaping the future. ',
  resume: '/Solana_Towers_Whitepaper.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'room2.png',
    title: 'Tower 0 "Matrix - 5th October 2021"',
    info: 'Inital NFT offering for early investors. Each investor will receive a special NFT that will grant access to the HQ of Solana Towers',
    info2:
      'Each NFT will have access to their own space and will receive revenue from the building but also will receive revenue from all subsequent buildings',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'room3.png',
    title: 'Metaverse Investment - December 2021',
    info: 'Acquisition of Decentraland/Sandbox plot. Start of revenue sharing airdrops. Suddivision of spaces and creation of the metaverse building.',
    info2:
      'Creation of the Metaverse assets, design and building of the metaverse world spaces. Collaborations with SOLANA Blue Chip projects, setup public galleries in the public floors, and booking events in the penthouse floors.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'room4.png',
    title: 'Management Platform - June 2022',
    info: 'Beginning of development of Real Estate Management Platform for Metaverse Spaces (REMPMS). Enable the token holders to customize, manage, merge and upgrade their spaces.',
    info2:
      'Enabling multiple revenue flows for the token holders. Community created assets will be available for use and revenue will be split among NFT holders',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'room5.png',
    title: 'Investment Bridge - October 2022',
    info: 'Metaverse Investment Fund setup for each holder to invest in the metaverse world.',
    info2:
      'The Solana Towers Venture Fund will be the first VC DAO in the metaverse, allowing every holder to stake their tokens and invest in other the metaverse RE, NFTs projects and other Defi projects',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Join the Discord Server',
  btn: 'discord',
  email: 'https://discord.gg/RDUB9AJy',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'users',
      url: 'https://discord.gg/RDUB9AJy',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/solanatowers',
    },
    {
      id: nanoid(),
      name: 'trophy',
      url: 'https://thenftscore.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
