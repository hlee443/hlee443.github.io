import github from "../assets/github-mark.png";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <section className="w-full prose prose-blue lg:prose-xl drop-shadow">
      <h1>ivy lee</h1>
      <h2>full stack web developer</h2>
      <hr className="w-2/3 h-1 mb-5 bg-gray-900 border-1 rounded"></hr>
      <p>
        <strong>Full Stack Web Developer</strong> who enjoys creating simple and
        intuitive user experiences. Specializing in <strong>React</strong>,{" "}
        <strong>Node.js</strong>, <strong>Javascript</strong>, and{" "}
        <strong>MySQL</strong>. Passionate about learning new technologies and
        creating innovative solutions.
      </p>
      <p>
        When not coding, you can find me playing video games, trying out new
        recipes, or binge-watching anime.
      </p>
      <h4>
        Get in touch with me for any inquiries, collaboration opportunities, or
        simply to connect!{" "}
      </h4>
      <div className="my-2 space-x-2 lg:mt-10">
        <a
          href="https://github.com/hlee443"
          className="inline-block transform transition duration-400 hover:scale-110 hover:shadow px-2 py-2 text-xs font-semibold text-black bg-blue-500 bg-opacity-30 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/ivy-hw-lee/"
          className="inline-block transform transition duration-400 hover:scale-110 hover:shadow px-2 py-2 text-xs text-black font-semibold bg-blue-500 bg-opacity-30 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:ivyhwlee920@gmail.com"
          className="inline-block transform transition duration-400 hover:scale-110 hover:shadow px-2 py-2 text-xs text-black font-semibold bg-blue-500 bg-opacity-30 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
