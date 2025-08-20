import React from "react";

const primaryColor = "#4285F4";

const aboutStyles = {
  display: "flex",
  alignItems: "center",
  gap: "32px",
  flexWrap: "wrap",
};

const profileImgStyles = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  border: `4px solid ${primaryColor}`,
  objectFit: "cover",
  boxShadow: `0 4px 24px ${primaryColor}30`,
  animation: "float 2.5s ease-in-out infinite",
};

const textContentStyles = {
  flex: 1,
  fontSize: "1.35rem",
  fontFamily: "'Times New Roman', Times, serif",
  color: "#222",
};

const highlightStyles = {
  fontWeight: "bold",
  color: primaryColor,
  fontSize: "1.6rem",
  background: "#F4F6F8",
  borderRadius: "6px",
  padding: "0 6px",
  boxShadow: "0 2px 6px #4285F420",
};

const cvLinkStyles = {
  display: "inline-block",
  marginTop: "18px",
  background: primaryColor,
  color: "#fff",
  padding: "8px 18px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  fontFamily: "'Gatto', Arial, sans-serif",
  transition: "background 0.2s",
  boxShadow: `0 2px 6px ${primaryColor}30`,
};

const About = () => (
  <div>
    <h2>About Me</h2>
    <div style={aboutStyles}>
      <img
        src="./src/images/Pro_Pic.jpeg"
        alt="Frederick animated profile"
        style={profileImgStyles}
      />
      <div style={textContentStyles}>
        Hi, I'm <span style={highlightStyles}>Frederick</span>! I build modern
        web experiences and love to create impactful software. With a passion
        for coding and problem-solving, I strive to make the web a better place
        through innovative solutions.
        <br />
        <br />I specialize in
        <span style={highlightStyles}>backend</span> and{" "}
        <span style={highlightStyles}>mobile app </span> development using
        <span style={highlightStyles}>Node.js</span>,
        <span style={highlightStyles}>Express</span>,
        <span style={highlightStyles}>Python</span>, and
        <span style={highlightStyles}>Flutter</span>. I have interest in
        frontend technologies like <span style={highlightStyles}>React</span>.
        <br />
        <br />
        My goal is to create seamless user experiences while ensuring robust
        backend functionality.
        <br />
        <br />
        When I'm not coding, you can find me exploring new technologies -{" "}
        <span style={highlightStyles}>Data Analytics</span>, contributing to
        open source, or sharing and reading Tech blogs or articles.
        <br />
        <br />
        <a href="./src/images/Frederick_CV.pdf" style={cvLinkStyles} download>
          Download CV
        </a>
      </div>
    </div>
    <style>
      {`
      @keyframes float {
        0% { transform: translateY(0);}
        50% { transform: translateY(-12px);}
        100% { transform: translateY(0);}
      }
    `}
    </style>
  </div>
);

export default About;
