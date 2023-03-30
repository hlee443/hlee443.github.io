import myCibo from "../assets/myCibo.jpg";
import github from "../assets/github-mark.png";
import openLink from "../assets/share.png";
export default function Project({
  img = myCibo,
  appHeader = "App Header",
  appTitle = "App Title",
  appDescription = "App Description",
  githubLink = "",
  siteLink = "",
}) {
  const headerItems = appHeader.split(", ");
  return (
    <div className="mt-5 drop-shadow">
      <h1 className="mx-auto mb-5 text-2xl font-semibold leading-none tracking-tighter text-black">
        {appTitle}
      </h1>
      <img
        className="object-cover object-center transform 
        transition duration-400 hover:scale-105 w-full mb-1 lg:h-48 md:h-36 rounded-xl cursor-pointer"
        src={img}
        alt="image"
      />
      <div className="mb-5">
        {headerItems.map((item, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 mx-1 text-xs font-semibold text-black bg-white bg-opacity-50 rounded-lg"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mx-auto text-base font-medium leading-relaxed text-black">
        {appDescription}
      </p>
      <div className="my-4 space-x-2">
        <a
          href={githubLink} // Replace with the actual GitHub URL
          target="_blank"
          className="inline-block transform 
          transition duration-400 hover:scale-110 hover:shadow px-2 py-2 text-xs font-semibold text-black bg-blue-500 bg-opacity-30 rounded-full"
          title="GitHub"
        >
          <img src={github} alt="Github" width={25} />
        </a>
        <a
          href={siteLink} // Replace with the actual site URL
          target="_blank"
          className="inline-block transform 
          transition duration-400 hover:scale-110 hover:shadow px-2 py-2 mx-1 text-xs font-semibold text-black bg-blue-500 bg-opacity-30 rounded-full"
          title="Go to site"
        >
          <img src={openLink} alt="Open Link" width={25} />
        </a>
      </div>
    </div>
  );
}
