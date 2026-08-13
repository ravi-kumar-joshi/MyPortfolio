import React from "react";
import { Col, Row } from "react-bootstrap";

import C from "../../Assets/TechIcons/C.svg";
import Cpp from "../../Assets/TechIcons/C++.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import CSharp from "../../Assets/TechIcons/Csharp.svg";

import HTML from "../../Assets/TechIcons/HTML5.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";

import Node from "../../Assets/TechIcons/Node.svg";
import Express from "../../Assets/TechIcons/Express.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Authentication from "../../Assets/TechIcons/auth0.svg";
import RestApi from "../../Assets/TechIcons/rest-api.svg";
import JWT from "../../Assets/TechIcons/jwt.svg";

import Git from "../../Assets/TechIcons/Git.svg";
import GitHub from "../../Assets/TechIcons/github.svg";
import VSCode from "../../Assets/TechIcons/vscode.svg";
import Figma from "../../Assets/TechIcons/Figma.svg";
import Canva from "../../Assets/TechIcons/Canva.svg";
import Vercel from "../../Assets/TechIcons/Vercel.svg";
import chatgpt from "../../Assets/TechIcons/ChatGPT-Logo.svg";
import Gemini from "../../Assets/TechIcons/Gemini.svg";
import githubCopilot from "../../Assets/TechIcons/github-copilot.svg";
import Claude from "../../Assets/TechIcons/Claude_AI_symbol.webp";
import Cursor from "../../Assets/TechIcons/Cursor.svg";

function Techstack() {
  return (
    <>
      {/* Programming Languages */}
      <h2 className="tech-category-title">Programming Languages</h2>

      <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={C} alt="C" />
          <div className="tech-icons-text">C</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Cpp} alt="C++" />
          <div className="tech-icons-text">C++</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Java} alt="Java" />
          <div className="tech-icons-text">Java</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="Python" />
          <div className="tech-icons-text">Python</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="JavaScript" />
          <div className="tech-icons-text">JavaScript</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={CSharp} alt="C#" />
          <div className="tech-icons-text">C#</div>
        </Col>
      </Row>

      {/* Frontend */}
      <h2 className="tech-category-title">Frontend</h2>

      <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={HTML} alt="HTML5" />
          <div className="tech-icons-text">HTML5</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={CSS} alt="CSS3" />
          <div className="tech-icons-text">CSS3</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="JavaScript" />
          <div className="tech-icons-text">JavaScript</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="React.js" />
          <div className="tech-icons-text">React.js</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Bootstrap} alt="Bootstrap" />
          <div className="tech-icons-text">Bootstrap</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Tailwind} alt="Tailwind CSS" />
          <div className="tech-icons-text">Tailwind CSS</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={MUI} alt="Material UI" />
          <div className="tech-icons-text">Material UI</div>
        </Col>
      </Row>

      {/* Backend */}
      <h2 className="tech-category-title">Backend & APIs</h2>

      <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Node} alt="Node.js" />
          <div className="tech-icons-text">Node.js</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Express} alt="Express.js" />
          <div className="tech-icons-text">Express.js</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={RestApi} alt="REST API" />
          <div className="tech-icons-text">REST APIs</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Authentication} alt="Authentication" />
          <div className="tech-icons-text">Authentication</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={JWT} alt="JWT" />
          <div className="tech-icons-text">JWT</div>
        </Col>
      </Row>

      {/* Database */}
      <h2 className="tech-category-title">Database</h2>

      <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Mongo} alt="MongoDB" />
          <div className="tech-icons-text">MongoDB</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Firebase} alt="Firebase" />
          <div className="tech-icons-text">Firebase</div>
        </Col>
      </Row>

      {/* Tools */}
      <h2 className="tech-category-title">Tools & Platforms</h2>

      <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Git} alt="Git" />
          <div className="tech-icons-text">Git</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={GitHub} alt="GitHub" />
          <div className="tech-icons-text">GitHub</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={VSCode} alt="VS Code" />
          <div className="tech-icons-text">VS Code</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Postman} alt="Postman" />
          <div className="tech-icons-text">Postman</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Figma} alt="Figma" />
          <div className="tech-icons-text">Figma</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Canva} alt="Canva" />
          <div className="tech-icons-text">Canva</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Vercel} alt="Vercel" />
          <div className="tech-icons-text">Vercel</div>
        </Col>
      </Row>

      {/* AI */}
      <h2 className="tech-category-title">AI & AI Tools</h2>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={RestApi} alt="AI APIs" />
          <div className="tech-icons-text">AI APIs</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={chatgpt} alt="OpenAI API" />
          <div className="tech-icons-text">OpenAI API</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Gemini} alt="Gemini API" />
          <div className="tech-icons-text">Gemini API</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={githubCopilot} alt="GitHub Copilot" />
          <div className="tech-icons-text">GitHub Copilot</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Claude} alt="Claude"  height={24} width={24}/>
          <div className="tech-icons-text">Claude</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Cursor} alt="Cursor" />
          <div className="tech-icons-text">Cursor</div>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;