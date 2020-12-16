import React from 'react';
import { Link } from 'react-router-dom'
const Recipes = props => {

  return (
    <div>

 
    <div style={{textAlign:"center"}}>
    <h2 style={{textAlign:"center",fontSize:"45px",padding:"25px",letterSpacing:"6px",boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)"}}>Find our recipes</h2>
    </div>
    <div className="row">
   
     
    <div className="col-md-12">
      <div className="card-banner card-custom">
        <Link to={`/recipes/meat`}>
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
                  Meat
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://media4.s-nbcnews.com/i/newscms/2019_40/3038966/191004-red-meat-grocery-store-2007-ac-919p_514940e7fa4de1fedf43f727b77312e3.jpg"
                style={{ height: "250px", width: "400px" }}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="col-md-12">
      <div className="card-banner card-custom">
        <Link to={`/recipes/chicken`}>
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
                  Chicken
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://pbs.twimg.com/media/EaenqviUYAEvqUZ.jpg:large"
                style={{ height: "250px", width: "400px" }}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="col-md-12">
      <div className="card-banner card-custom">
        <Link to={`/recipes/fish`}>
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
                 Fish
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/9fe558c/2147483647/strip/true/crop/1000x806+0+0/resize/880x709!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkera%2Ffiles%2F201408%2Ffish1.jpg"
                style={{ height: "250px", width: "400px" }}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="col-md-12">
      <div className="card-banner card-custom">
        <Link to={`/recipes/vegeterian`}>
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
                Vegeterian
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/vegetarian-diet-plan-1296x728-feature.jpg?w=1155&h=1528"
                style={{ height: "250px", width: "400px" }}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Recipes;
