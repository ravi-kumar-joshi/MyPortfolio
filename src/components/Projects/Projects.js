import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Fin_learn from "../../Assets/Projects/finlearn2.png"
import To_do from "../../Assets/Projects/To-Do_list.png"
import clock from "../../Assets/Projects/clock.png"
import calculator from "../../Assets/Projects/calculator.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fin_learn}
              isBlog={false}
              title="FinLearn"
              description="FinLearn is a gamified financial literacy platform that makes learning finance engaging through interactive courses, XP rewards, levels, daily streaks. It also provides real-time financial calculators, an AI-powered FinBot for personalized guidance, and shareable certificates upon course completion."
              ghLink="https://github.com/ravi-kumar-joshi/FinLearn"
              demoLink="https://fin-learn-client-ttsd.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={To_do}
              isBlog={false}
              title="To-Do List"
              description="The To-Do List Web App is a responsive and user-friendly task management application designed to help users organize their daily tasks efficiently. The application provides a simple and clean interface where users can create, edit, complete, and delete tasks while keeping their data saved in the browser."
              ghLink="https://github.com/ravi-kumar-joshi/To-do-list"
              demoLink="https://ravi-kumar-joshi.github.io/To-do-list/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Clock"
              description="The Analog Clock Web App is a simple and interactive time-display application designed to show the current time using a traditional analog clock interface. The application uses HTML, CSS, and JavaScript to create a clean and responsive design with dynamically moving clock hands.
"
              ghLink="https://github.com/ravi-kumar-joshi/analog-clock-"
              demoLink="https://ravi-kumar-joshi.github.io/analog-clock-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Simple Calculator"
              description="The Simple Calculator Web App is a basic yet functional calculator application built with HTML, CSS, and JavaScript. It provides a clean and intuitive interface for performing arithmetic operations with real-time results."
              ghLink="https://github.com/ravi-kumar-joshi/Simple_calculator"
              demoLink="https://ravi-kumar-joshi.github.io/Simple_calculator/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
