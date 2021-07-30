import React from "react";
import FontAwesoneIcons from "../FontAwesmeLibrary/FontAwesomeIcon";
import { Row, Col } from "react-bootstrap";

import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="Footer">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div>
              <FontAwesoneIcons iconname={faTwitter} />

              <FontAwesoneIcons iconname={faFacebook} />
              <FontAwesoneIcons iconname={faLinkedin} />
              <FontAwesoneIcons iconname={faGoogle} />
            </div>
          </Col>
        </Row>
        <div className="copyrightText">© Copyright 2021 The Solo Chef</div>
      </div>
    </>
  );
}

export default Footer;
