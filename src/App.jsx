import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import SideNavBar from "./components/SideNavBar";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient">
      <div className="pt-10">
        <div className="flex overflow-hidden bg-white bg-opacity-30 rounded-lg w-5/6 mx-auto rounded-3xl drop-shadow-xl">
          <div className="hidden md:flex md:flex-shrink-0 pt-10">
            <SideNavBar />
          </div>
          <div className="flex flex-col flex-1 w-0 overflow-hidden">
            <main className="relative flex-1 overflow-y-auto focus:outline-none">
              <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8"></div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                  {/* <!-- Put content here --> */}
                  <section>
                    <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue drop-shadow-lg">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/projects" element={<Projects />} />
                          <Route
                            path="/technologies"
                            element={<Technologies />}
                          />
                          <Route path="/contact" element={<Technologies />} />
                        </Routes>
                      </div>
                    </div>
                  </section>

                  {/* <!-- Do not cross the closing tag underneath this coment--> */}
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
