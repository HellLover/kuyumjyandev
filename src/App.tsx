import { useState } from "react";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./components/sections/Home";
import AboutMe from "./components/sections/AboutMe";
import Technology from "./components/sections/Technology";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen font-sans text-zinc-300 antialiased transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <Navbar />
        <main className="mx-auto max-w-4xl px-6">
          <Home />
          <AboutMe />
          <Technology />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
