import "./index.css";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <div className="App">
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px 0 16px 0",
            background: "linear-gradient(90deg, #4285F4 70%, #87CEEB 100%)",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <h1 className="creative-title">
            <span className="sparkle">✦</span> Fred{" "}
            <span style={{ color: "#212121", fontWeight: "bold" }}>
              Decodes
            </span>
            <span className="sparkle">✦</span>
          </h1>
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
        <style>{`
        .creative-title {
          font-family: 'Gatto', Arial, sans-serif;
          font-size: 2.8rem;
          letter-spacing: 2.5px;
          background: linear-gradient(90deg, #4285F4 60%, #87CEEB 100%);
          -webkit-background-clip: text;
          background-clip: text;
          text-shadow: 2px 4px 12px #90CAF9cc;
          animation: titlePulse 2.4s infinite alternate;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sparkle {
          font-size: 1.5em;
          animation: sparkleTwinkle 1.8s infinite alternate;
        }
        @keyframes titlePulse {
          0% { transform: scale(1);}
          60% { transform: scale(1.035);}
          100% { transform: scale(1);}
        }
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.6; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.2);}
        }
      `}</style>
      </div>
    </>
  );
}

export default App;
