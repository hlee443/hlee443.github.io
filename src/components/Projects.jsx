import Project from "./Project";
import myCibo from "../assets/myCibo.jpg";
import wordGotchu from "../assets/wordGotchu.png";
import pathfinder from "../assets/pathfinder.png";
import sidekick from "../assets/SidekickWorkWise.png";

export default function Projects() {
  return (
    <>
      <Project
        img={myCibo}
        siteLink="https://github.com/myCibo/myCiboNative.git"
        githubLink="https://github.com/myCibo/myCiboNative.git"
        appHeader="React Native, Expo Go, CockroachDB, Express, Railway"
        appTitle="myCibo"
        appDescription="myCibo is a comprehensive food management mobile app designed to enhance users culinary experiences by efficiently tracking food inventory, devising customized recipes based on available ingredients, and supporting grocery receipt scanning for replenishing supplies."
      />
      <Project
        img={sidekick}
        siteLink="https://sidekick-front-end.vercel.app/"
        githubLink="https://github.com/BinaryBusters/binary_busters_frontend.git"
        appHeader="React, Tailwind, Flask(Python), OpenAI API, Render, Vercel"
        appTitle="Sidekick"
        appDescription="Sidekick - the all-in-one platform designed to help you stay ahead of the curve and excel in your career. Whether you're a recent graduate trying to break into the tech industry or a seasoned professional looking to upgrade your skills, Sidekick provides technical training, real-world practice scenarios, and targeted feedback to help you achieve your professional goals."
      />
      <Project
        img={pathfinder}
        siteLink="https://pathfinder-athena.vercel.app/"
        githubLink="https://github.com/hlee443/PathFinder-Athena.git"
        appHeader="Next.js, Vercel, Express, API, Railway, AWS RDS."
        appTitle="PathFinder"
        appDescription="Pathfinder is a dedicated web application that is designed to aid students with dyslexia and facilitate a better understanding of educational content. Students can upload their text documents and utilize an array of features, such as customizable font sizes, colors, and other attributes, alongside text highlighting, summarization, and an integrated dictionary."
      />
      <Project
        img={wordGotchu}
        siteLink="https://word-gotchu.up.railway.app/"
        githubLink="https://github.com/iantelli/word-gotchu.git"
        appHeader="HTML/CSS, React, Javascript, Node.js, Express,Railway, Firebase"
        appTitle="WordGotchu"
        appDescription="WordGotchu is a Pixel styled multiplayer web platform game based on Wordle and original characters known as Gotchus that battle against each other in an arena."
      />
    </>
  );
}
