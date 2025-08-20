import "./index.css";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1>FredDecodes</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <main>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <footer>
          &copy; {new Date().getFullYear()} FredDecodes. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
