import React from "react";
import Card from "react-bootstrap/Card";
import pati from "../../images/pati.png";
function Cards() {
  return (
    <>
      <Card className="bg-dark text-white ">
        <Card.Img src={pati} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>This is a wider card with supporting</Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Cards;
