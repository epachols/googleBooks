import React from "react";
import "./bookcard.css";
import { Row, Col, Divider, Button } from "antd";

export default function BookCard(props) {
  return (
    <div className="bookCard">
      <Row>
        <Col span={18}>
          <h2>{props.data.title}</h2>
          <h5>{props.data.subtitle}</h5>
        </Col>
        <Col span={6} style={{textAlign: "right"}}>
          <Button>view</Button>
          <Button>edit</Button>
        </Col>
          <span className="Authors">{props.data.authors}</span>
      </Row>
      <Divider></Divider>
      <Row gutters={8,0}>
        <Col span={4}>

        {/* WORKING ::TODO::: pick out the library cart for OR after it is appropriately sized */}
        {/* <img src={props.data.image.thumbnail || } /> */}
        picture


        </Col>
        <Col span={19}>{props.data.description}</Col>
      </Row>
    </div>
  );
}