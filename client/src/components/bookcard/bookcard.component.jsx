import React from "react";
import "./bookcard.css";
import { Row, Col, Divider, Button, message } from "antd";
import BookCart from "../images/librarian.png";
import API from "../../utils/API";

export default function BookCard(props) {
  const saveBook = () => {
    const bookData = {
      title: props.data.title,
      subtitle: props.data.subtitle,
      authors: props.data.authors,
      description: props.data.description,
      image: props.data.image.thumbnail,
      link: props.data.link,
      pageCount: props.data.pageCount,
    };
    console.log(bookData)

    API.saveBook(bookData)
    .then(()=>{
      message.info('added this book to "saved"')
      console.log('success')
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className="bookCard">
      <Row>
        <Col span={18}>
          <h2>{props.data.title}</h2>
          <h5>{props.data.subtitle}</h5>
        </Col>
        <Col span={6} style={{ textAlign: "right" }}>
          {/* TODO: MODIFY CONDITIONAL BUTTONS TO ACCEPT SAVE/DELETE */}
          {/* TODO: modify "view" button to bring up an info modal with full details. */}

          <Button>view</Button>


          {props.save && props.save === true? (
            <Button onClick={() => saveBook()}>save</Button>
          ) : (
            <Button 
            // TODO: create delete function, have it take ID. onClick={()=>deleteBook()}
            >delete</Button>
          ) }


        </Col>
        <span className="Authors">{props.data.authors}</span>
      </Row>
      <Divider></Divider>
      <Row gutter={(16, 16)}>
        <Col span={4}>
          {props.data.image && props.data.image.thumbnail ? (
            <img
              alt="thumbnail picture"
              style={{ width: "100%" }}
              src={props.data.image.thumbnail}
            />
          ) : (
            <></>
          )}
        </Col>
        <Col span={19}>{props.data.description}</Col>
      </Row>
    </div>
  );
}
