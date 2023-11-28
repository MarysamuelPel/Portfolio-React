import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Socials } from "./components/Socials";

function App() {
  return (
  <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Experience />
    <Contact />

    <Socials />
  </div>
  );
}

export default App;
