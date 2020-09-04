import React from "react";
import "./bookcard.css";
import { Row, Col, Divider, Button } from "antd";

export default function BookCard(props) {
  return (
    <div className="bookCard">
      <Row>
        <Col span={18}>
          <h3>book title</h3>
          <h5>book subtitle</h5>
          <Divider orientation="left">Book Authors</Divider>
        </Col>
        <Col span={16}>
          <Button>view</Button>
          <Button>edit</Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>picture</Col>
        <Col span={18}>description</Col>
      </Row>
    </div>
  );
}
