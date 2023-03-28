import React, { useState } from "react";
import Project from "./Project";
import myCibo from "../assets/myCibo.jpg";
import wordGotchu from "../assets/wordGotchu.png";
import pathfinder from "../assets/pathfinder.png";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section className="w-full mx-auto prose lg:prose-xl">
      <h1>projects</h1>
      <div className="relative items-center w-full mt-0 mx-auto not-prose">
        <div className="grid w-full grid-cols-2 gap-8">
          <Project
            img={myCibo}
            onProjectClick={handleModal}
            githubLink="https://github.com/myCibo/myCiboNative.git"
            appHeader="React Native, Expo Go, CockroachDB, Express, Railway"
            appTitle="myCibo (in development)"
            appDescription="myCibo is a comprehensive food management mobile app designed to enhance users culinary experiences by efficiently tracking food inventory, devising customized recipes based on available ingredients, and supporting grocery receipt scanning for replenishing supplies."
          />
          <Project
            img={pathfinder}
            onProjectClick={handleModal}
            siteLink="https://pathfinder-athena.vercel.app/"
            githubLink="https://github.com/hlee443/PathFinder-Athena.git"
            appHeader="Next.js, Vercel, Express, API, Railway, AWS RDS."
            appTitle="PathFinder"
            appDescription="Pathfinder is a dedicated web application that is designed to aid students with dyslexia and facilitate a better understanding of educational content. Students can upload their text documents and utilize an array of features, such as customizable font sizes, colors, and other attributes, alongside text highlighting, summarization, and an integrated dictionary."
          />

          <Project
            img={wordGotchu}
            onProjectClick={handleModal}
            siteLink="https://word-gotchu.up.railway.app/"
            githubLink="https://github.com/iantelli/word-gotchu.git"
            appHeader="HTML/CSS, React, Javascript, Node.js, Express,Railway, Firebase"
            appTitle="WordGotchu"
            appDescription="WordGotchu is a Pixel styled multiplayer web platform game based on Wordle and original characters known as Gotchus that battle against each other in an arena."
          />
        </div>
      </div>
    </section>
  );
}