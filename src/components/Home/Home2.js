import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I’m <b className="purple">Ravi Kumar</b>, a BCA graduate and
              aspiring <b className="purple">Software Engineer</b> from
              Najibabad, Uttar Pradesh, India. I’m passionate about web
              development, learning new technologies, and building useful
              applications.
              <br />
              <br />
              I’m currently looking for my first{" "}
              <i>
                <b className="purple">
                  entry-level opportunity in the IT industry
                </b>
              </i>
              , where I can use my skills, learn from experienced developers,
              and grow as a software engineer.
              <br />
              <br />I enjoy working with{" "}
              <i>
                <b className="purple">
                  HTML, CSS, JavaScript, React.js, Node.js, Express.js, and
                  MongoDB
                </b>
              </i>
              , and I’m interested in building both frontend and backend parts
              of web applications.
              <br />
              <br />
              One of my main projects is{" "}
              <i>
                <b className="purple">FinLearn</b>
              </i>
              , a gamified personal finance web application designed to make
              financial literacy simple, interactive, and accessible.
              <br />
              <br />I believe in <b className="purple">learning by building</b>,
              solving real-world problems, and improving my skills one project
              at a time.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Ravi Kumar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
