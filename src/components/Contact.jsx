import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const contactSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Times New Roman', Times, serif",
  fontSize: "1.3rem",
  color: "#222",
  textAlign: "center",
  margin: "0 auto",
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#1A73F8",
  background: "#F4F6F8",
  fontFamily: "'Gatto', Arial, sans-serif",
  fontWeight: "bold",
  borderRadius: "8px",
  padding: "8px 18px",
  textDecoration: "none",
  boxShadow: "0 2px 8px #90CAF930",
  fontSize: "1.18rem",
  transition: "background 0.18s, transform 0.2s",
  marginBottom: "12px",
  animation: "fadeIn 0.7s cubic-bezier(.49,.53,.54,.83) backwards",
};

const iconStyle = {
  fontSize: "1.54em",
  color: "#4285F4",
  transition: "color 0.2s, transform 0.2s",
};

const Contact = () => {
  return (
    <div style={contactSectionStyle}>
      <h2>Contact</h2>
      <p style={{ fontSize: "1.22rem" }}>
        Find me on social media or reach out via email:
      </p>
      <ul style={{ listStyle: "none", paddingLeft: 0, margin: "0 0 8px 0" }}>
        <li>
          <a
            href="https://www.linkedin.com/in/freddecodes"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            className="contact-link"
          >
            <FaLinkedin style={iconStyle} className="contact-icon" />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/fredDecodes"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            className="contact-link"
          >
            <FaGithub style={iconStyle} className="contact-icon" />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="mailto:fred0xx86@gmail.com"
            style={linkStyle}
            className="contact-link"
          >
            <FaEnvelope style={iconStyle} className="contact-icon" />
            Email
          </a>
        </li>
      </ul>
      <p style={{ fontSize: "1.16rem", margin: "10px 0 0 0" }}>
        I look forward to connecting with you!
      </p>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(18px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .contact-link:hover .contact-icon {
          color: #87CEEB;
          transform: scale(1.18) rotate(-6deg);
        }
        .contact-link:hover {
          background: #90CAF9;
          transform: translateY(-2px) scale(1.04);
        }
      `}</style>
    </div>
  );
};

export default Contact;
