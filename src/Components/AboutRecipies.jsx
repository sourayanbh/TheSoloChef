import React from "react";
import { Row, Col } from "react-bootstrap";
import LeftSide from "./AboutRecipiesDetails/LeftSide";
import RightSide from "./AboutRecipiesDetails/RightSide";
import MyNavbar from "./Navbar";

function AboutRecipes() {
  return (
    <>
      <div className="aboutRecipePage">
        <MyNavbar />
        

        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="leftDiv">
              <LeftSide />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="rightDiv">
              <RightSide />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AboutRecipes;
