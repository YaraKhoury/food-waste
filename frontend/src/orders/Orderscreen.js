import React, { useEffect, useState, useContext } from "react";
import {  NavLink } from "react-router-dom";
import "./Orders.css";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../shared/hooks/http-hook";
import OrdersList from "./OrdersList";
import { AuthContext } from "../shared/context/auth-context";
import { useDispatch, useStore } from "react-redux";
import { ordersActions } from "../redux/actions/orders";
function OrdersScreen(props) {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedOrders, setLoadedOrders] = useState();
  var checkoutPrice = 0;
  var [CheckoutCardPrice, setPrice] = useState();
  var checkProducts;

  const store = useStore()

  const dispatch = useDispatch()

  useEffect(() => {
    const retrieveOrders = async () => {
      await  dispatch(ordersActions.getcartInfo(localStorage.getItem('user')))
      setLoadedOrders(store.getState().getCartInfo.orders.data.Cart);
      store.getState().getCartInfo.orders.data.Cart.map(x => {
        checkoutPrice = checkoutPrice + x.totalprice;
        setPrice(checkoutPrice);
      })
    }
    retrieveOrders();
  }, [sendRequest])

  const removeFromCartHandler =  (cart) => {
    try {
      dispatch(ordersActions.removefromCart({
        "userId": localStorage.getItem('user'),
        "productId":cart.id}))
     const newList = loadedOrders.filter(x=>
      x.id != cart.id 
 )
 setPrice(CheckoutCardPrice - cart.totalprice);
 setLoadedOrders(newList);
 
  } catch {

  }
}
   
  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div className="row">
        <div className="col-md-6">
          {!isLoading && loadedOrders && <OrdersList items={loadedOrders} />} 
          {!isLoading && loadedOrders &&
           <div>{loadedOrders.map(cart=> {
             return (<div className="container"><div className="row"   key={cart.id} > 
             <div>
              <div className="row">
                <div className="col-lg-10">
                  <div className="mb-6" style={{padding:"15px"}}>
                    <div >
                      <div className="row mb-4">
                        <div className="col-md-5 col-lg-3 col-xl-3">
                          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img className="img-fluid w-100" 
                              src={cart.productImg} alt="Sample" style={{height:"80px",width:"150px"}}/>
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-9 col-xl-9">
                          <div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <h5>{cart.productName}</h5>
                                <p className="mb-3 text-muted text-uppercase small"></p>
                                <p className="mb-2 text-muted text-uppercase small">Quantity: {cart.quantity}</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <button className="btn btn-danger"  onClick={()=>removeFromCartHandler(cart)}>Remove Item</button>
                              </div>
                              <p className="mb-0" style={{float:"right",textAlign:"right"}}><span><strong>{cart.totalprice} L.L</strong></span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>)
           } )} </div>}
        </div>        
        {loadedOrders != 0 &&
        <div className="col-md-4">
          <div className="mb-3">
            <div
              className="pt-4"
              style={{
                boxShadow: "0 4px 17px rgba(0, 0, 0, 0.10)",
                padding: "25px",
              }}
            >
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong style={{ color: "black" }}>
                      The Total Amount{" "}
                    </strong>
                  </div>
                  <span>
                      <strong style={{ color: "black" }}>{CheckoutCardPrice}</strong>
                  </span>
                </li>
              </ul>
                <NavLink to={`/cart/checkout`}>
                  <button type="button" className="btn btn-primary btn-block">
                    Go to checkout
                  </button>
                </NavLink>              
            </div>
          </div>
        </div>
}

      </div>
    </React.Fragment>
  );
}
export default OrdersScreen;
