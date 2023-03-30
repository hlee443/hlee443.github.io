import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="min-h-screen bg-gradient">
      <nav className="sticky top-0 z-50 left-0 w-full bg-orange-200 py-4 px-6 md:py-8 md:px-12 lg:px-16 xl:px-32">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-bold text-xl text-black">iL</span>
          </div>
          <div className="flex md:flex md:items-center drop-shadow">
            <a
              href="#"
              className="block md:inline-block md:mt-0 text-black hover:text-white mr-8"
            >
              about
            </a>
            <a
              href="#projects"
              className="block md:inline-block md:mt-0 text-black hover:text-white"
            >
              projects
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="py-8 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue drop-shadow-lg">
          <Home />
        </div>
      </section>

      <section id="projects" className="w-full px-5 pt-10 mx-auto prose prose-blue lg:prose-xl lg:pt-40 drop-shadow">
        <h1>project highlights</h1>
        <div className="relative items-center w-full mt-0 mx-auto not-prose">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8">
            <Projects />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
