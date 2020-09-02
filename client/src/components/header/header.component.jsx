import React from "react";
import { Row, Col, Menu } from "antd";
import "./header.css";

export default function Header() {
  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        padding: "5px",
      }}
      className="Header"
    >
      <Col xs={24} s={12} m={12} l={12} xl={12}>
        <span style={{ fontSize: "24px" }}>Google Books</span>
        <a href="#">Search</a>
        &nbsp;&nbsp;
        <a href="#">Saved</a>
      </Col>
    </Row>
  );
}
