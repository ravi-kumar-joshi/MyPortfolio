import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import windows from "../../Assets/TechIcons/windows-os.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import chatgpt from "../../Assets/TechIcons/ChatGPT-Logo.svg";
import cloud from "../../Assets/TechIcons/Claude_AI_symbol.webp";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={chatgpt} alt="ChatGPT" className="tech-icon-images" />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={cloud} alt="Claude AI" className="tech-icon-images" />
        <div className="tech-icons-text">Claude AI</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
