import React, { useState, useContext } from "react";
import "./PlaceItem.css";
import { Link } from "react-router-dom";
const MarketItem = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card-banner card-custom">
          <Link to={`/places/${props.id}`}>
            <div
              className="row"
              style={{
                margin: "25px",
                padding: "15px",
                boxShadow: "0 4px 17px rgba(0, 0, 0, 0.10)",
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketItem;
