import React from "react";
import Card from "react-bootstrap/Card";
import Slide from "../Components/Slide";
import "bootstrap/dist/css/bootstrap.min.css";
import pati from "../images/pati.png";
import { Col, Row } from "react-bootstrap";

function Content() {
  return (
    <div style={{ background: "#000000" }} id="cart">
      <Row>
        <Col lg={2} />
        <Col lg={2}>
          <Card className="bg-dark text-white ">
            <Card.Img src={pati} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={2}>
          <Card className="bg-dark text-white ">
            <Card.Img src={pati} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={2}>
          <Card className="bg-dark text-white ">
            <Card.Img src={pati} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={2}>
          <Card className="bg-dark text-white ">
            <Card.Img src={pati} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting</Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row className="mx-auto my-4"></Row>
      <Row className="mx-auto my-2">
        <Col lg={4}> </Col>

        <Col lg={4}>
          <Slide />
        </Col>

        <Col lg={4}> </Col>
      </Row>
    </div>
  );
}

export default Content;
