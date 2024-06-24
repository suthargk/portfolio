import calendario from '../../assets/images/calendario.png';
import emoji_collection from '../../assets/images/emoji_collection.png';
import hector_logo from '../../assets/images/hectorai_logo.png';
import skull from '../../assets/images/skull.png';
import spotify_app from '../../assets/images/spotify_app.png';
import yapsody_logo from '../../assets/images/yapsody-logo.png';

export const projectList = [
  {
    id: 1,
    name: "Team Calendario",
    description:
      "Team Calendario is a Chrome extension where users manage events, set reminders, and stay organized while browsing the web.",
    imgSrc: calendario,
    path: "calendario",
    status: 0,
  },

  {
    id: 2,
    name: "Emoji collection",
    description: "Simple React app for searching emoji",
    imgSrc: emoji_collection,
    path: "https://emojicollection.netlify.app",
  },
  // {
  //   id: 3,
  //   name: "Spotify App",
  //   description:
  //     "Build a Spotify responsive app using React, Tailwind and GraphQL",
  //   imgSrc: spotify_app,
  //   path: "https://spotifymusicappreact.netlify.app",
  // },
];

export const workList = [
  {
    id: 1,
    company: "Hector AI",
    logo: hector_logo,
    position: "Frontend Engineer",
    duration: "2023 — Present",
    url: "https://www.hectorai.live/",
  },
  {
    id: 2,
    company: "Yapsody India",
    logo: yapsody_logo,
    position: "Frontend Engineer",
    duration: "2022 — 2023",
    url: "https://www.yapsody.com/ticketing/",
  },
  {
    id: 3,
    company: "Freelance",
    logo: skull,
    position: "Full Stack Engineer",
    duration: "2019 — 2021",
    url: "",
  },
];

export const blogList = [
  {
    id: 1,
    title: "When to use memo in React",
    description:
      "When a state change it re-render its component, it also re-render all of its descendants components.",
    url: "https://dev.to/suthargk/when-to-use-memo-in-react-dp3",
    date: "June 30, 2023",
  },
];
