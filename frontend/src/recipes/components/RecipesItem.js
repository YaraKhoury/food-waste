import React, { useState } from "react";
import {Modal} from 'react-bootstrap'
const RecipesItem = (props) => {
    console.log(props)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
      <div className="col-md-6">
        <div className="card-banner card-custom">
            <div
             onClick={handleShow}
              className="row"
              style={{
                margin: "25px",
                padding: "15px",
                boxShadow: "0 4px 17px rgba(0, 0, 0, 0.10)",
                cursor:"pointer"
              }}
            >
              <div className="col-md-6">
                <div>
                  <h5 className="title" style={{ color: "black" }}>
                    {props.title}
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={props.imgUrl}
                  style={{ height: "250px", width: "400px" }}
                ></img>
              </div>
            </div>
          <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img
                  src={props.imgUrl}
                  style={{ height: "250px", width: "400px" }}
                ></img></Modal.Body>
    <Modal.Body><span style={{fontWeight:"bold",fontSize:"20px"}}>Ingredients:</span> {props.ingredients.map(x => {
        return (<div style={{padding:"10px"}}>{x.text}</div>)
    })}</Modal.Body>

    <Modal.Body><span style={{fontWeight:"bold",fontSize:"20px"}}>Calories:</span> {props.calories}</Modal.Body>

    
    <Modal.Body><span style={{fontWeight:"bold",fontSize:"20px"}}>Time Needed: </span> {props.totalTime}Min</Modal.Body>

    <Modal.Body><span style={{fontWeight:"bold",fontSize:"20px"}}>Source: </span> {props.source}</Modal.Body>
      </Modal>
        </div>
    </div>
  );
};

export default RecipesItem;
