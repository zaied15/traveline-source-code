import React from "react";
import { Container, Row } from "react-bootstrap";
import pic from "../../images/profile-pic.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <Container className="my-5">
        <Row>
          <div className="col-md-4">
            <img className="img-fluid rounded" src={pic} alt="" />
            <h3 className="mt-3">Md. Anwar Zaied</h3>
          </div>
          <div className="col-md-8 p-5">
            <h3>My Goal</h3>
            <p>
              My goal or objective is clear. At present I am learning a most
              popular programming language called javascript. After the proper
              learning I want to see myself as a skilled web developer and app
              developer as well. I am dedicated in my learning and trying hardly
              to reach my goal at any cost In Shaa Allah. And I am very closed
              to my goal.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
