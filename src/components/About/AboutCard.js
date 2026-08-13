import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ravi Kumar</span> from{" "}
            <span className="purple">Najibabad, Uttar Pradesh, India</span>.
            <br />I have completed my{" "}
            <span className="purple">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            from{" "}
            <span className="purple">Rama Institute of Higher Education</span>
            .
            <br />
            I’m a passionate{" "}
            <span className="purple">
              Fresher & Aspiring Software Engineer
            </span>{" "}
            with an interest in{" "}
            <span className="purple">
              MERN Stack / Full-Stack Web Development
            </span>
            .
            <br />
            I’m currently looking for my first{" "}
            <span className="purple">
              Entry-Level / Fresher opportunity in the IT industry
            </span>
            , where I can apply my skills, learn from experienced developers,
            and grow as a software engineer.
            <br />
            <br />I have built and deployed{" "}
            <span className="purple">FinLearn</span>, a gamified personal
            finance web application designed to make financial literacy simple,
            interactive, and accessible.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative, curious, and motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects 💻
            </li>

            <li className="about-activity">
              <ImPointRight /> Reading Books 📚
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>

            <li className="about-activity">
              <ImPointRight /> Learning New Skills 🧠
            </li>

            <li className="about-activity">
              <ImPointRight /> Solving Real-World Problems 💡
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with passion. Learn with curiosity. Build with purpose. Grow
            with consistency."
          </p>

          <footer className="blockquote-footer">Ravi Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
