import React from "react";
import "./bookcard.css";
import { Row, Col, Divider, Button, message } from "antd";
import BookCart from "../images/librarian.png";
import API from "../../utils/API"

export default function BookCard(props) {

  const saveBook = (data) => {
    // console.log(data)
    // console.log(JSON.stringify(data))
    API.saveBook(JSON.stringify(data))
    .then(()=>{
      // message.info('added this book to "saved"')
      console.log('success')
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="bookCard">
      <Row>
        <Col span={18}>
          <h2>{props.data.title}</h2>
          <h5>{props.data.subtitle}</h5>
        </Col>
        <Col span={6} style={{textAlign: "right"}}>
          <Button>view</Button>
          <Button onClick={()=> saveBook(props.data)}>save</Button>
        </Col>
          <span className="Authors">{props.data.authors}</span>
      </Row>
      <Divider></Divider>
      <Row gutter={16,16}>
        <Col span={4}>

        {/* WORKING ::TODO::: pick out the library cart for OR after it is appropriately sized */}
        <img alt="thumbnail picture" style={{width: "100%"}} src={props.data.image.smallThumbnail} />


        </Col>
        <Col span={19}>{props.data.description}</Col>
      </Row>
    </div>
  );
}
