import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./PlaceForm.css";
import { useDispatch, useStore } from "react-redux";
import { marketsActions } from "../../redux/actions/markets";
import { ordersActions } from "../../redux/actions/orders";
const Market = () => {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().placeId;
  const store = useStore()

  const dispatch = useDispatch()
  useEffect(() => {
    const retrieveMarkets = async () => {
      await  dispatch(marketsActions.getMarket(userId))
      setLoadedPlaces(store.getState().marketReducer.Mymarkets.payload.data.place);
    }
    retrieveMarkets();
  }, [sendRequest])

  const addToCartHandler = (product) => {
    dispatch(ordersActions.addtoCart( localStorage.getItem('user'), product._id,product.name,product.discountedPrice,product.productImg));
  };
  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <div>
          <div>
            <div>
              {loadedPlaces.Products.map((x) => (
                <div className="container" key={x._id}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card-banner">
                        <div
                          className="row"
                          style={{
                            margin: "25px",
                            padding: "15px",
                            boxShadow: "0 4px 17px rgba(0, 0, 0, 0.10)",
                          }}
                        >
                          <div className="col-md-6">
                            <img
                              src={x.productImg}
                              style={{ height: "250px", width: "400px" }}
                            ></img>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <h5
                                className="mytitle"
                                style={{ color: "black" }}
                              >
                                {x.name}
                              </h5>
                            </div>
                            <div>
                              <h5
                                className="mytitle"
                                style={{ color: "black" }}
                              >
                                {x.discountedPrice} L.L
                              </h5>
                            </div>
                            <h6
                              style={{ fontSize: "25px", padding: "15px" }}
                              className="expiryDate"
                            >
                              Expiry Date: {x.expiryDate}
                            </h6>
                            <div style={{ textAlign: "center" }}>
                              <button
                                onClick={() => addToCartHandler(x)}
                                className="btn btn-primary "
                                style={{ marginTop: "35px" }}
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Market;

// we are getting the products of each market and adding to the cart