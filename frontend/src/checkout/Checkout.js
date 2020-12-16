
import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../shared/hooks/http-hook';
import { getCartInfo, } from '../actions/actions'
import { useForm } from '../shared/hooks/form-hook';
import Input from '../shared/components/FormElements/Input';
import Button from '../shared/components/FormElements/Button';
import { useHistory } from 'react-router-dom';
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../shared/util/validators';
import './Checkout.css';
import { useDispatch } from 'react-redux';
import { ordersActions } from '../redux/actions/orders';
const Checkout = () => {
  const history = useHistory();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedOrders, setLoadedOrders] = useState();
    var checkoutPrice = 0;
    var [CheckoutCardPrice, setPrice] = useState();
    const [formState, inputHandler, setFormData] = useForm(
      {
        fullname: {
          value: '',
          isValid: false
        },
        phoneNumber: {
          value: '',
          isValid: false
        },
        address: {
          value: '',
          isValid: false
        },
        cardNumber: {
          value: '',
          isValid: false
        },
        cvv: {
          value: '',
          isValid: false
        },
        monthExpiration: {
          value: '',
          isValid: false
        },
        yearExpiration: {
          value: '',
          isValid: false
        }
      },
      false
    );

    const [formStateCash, inputHandlerCash, setFormDataCash] = useForm(
      {
        fullname: {
          value: '',
          isValid: false
        },
        phoneNumber: {
          value: '',
          isValid: false
        },
        address: {
          value: '',
          isValid: false
        }
      },
      false
    );
    useEffect(() => {
         const retrieveUsers = async () => {
           await getCartInfo(localStorage.getItem("user")).then(res => {
              setLoadedOrders(res.Cart);
              res.Cart.map((x) => {
                checkoutPrice = checkoutPrice + x.totalprice;
               setPrice(checkoutPrice);
              });
            });
          }
          retrieveUsers();
         }, [sendRequest]) 
         const dispatch = useDispatch();
  const paymentOnlineSubmitHandler = async event => {
          event.preventDefault();
            try {
           await   dispatch(ordersActions.makePayment({
                "fullname": formState.inputs.fullname.value,
                "phoneNumber": formState.inputs.phoneNumber.value,
                "address": formState.inputs.address.value,
                "cardNumber":formState.inputs.cardNumber.value,
             "userId":localStorage.getItem("user"),
             "monthExpiration":formState.inputs.monthExpiration.value,
             "yearExpiration":formState.inputs.yearExpiration.value,
             "cvv":formState.inputs.cvv.value,
             "cart": loadedOrders
              }))
              alert("Your Order Will Arrive After 20 Minutes");
              history.push("/");
            } catch (err) {
              alert("Wrong Inputs");
            }
        };
     
  const paymentCashSubmitHandler = async event => {
    event.preventDefault();
  
    try {
     await dispatch(ordersActions.makePayment({
        "fullname": formStateCash.inputs.fullname.value,
             "phoneNumber": formStateCash.inputs.phoneNumber.value,
             "address": formStateCash.inputs.address.value,
             "cardNumber":"undefined",
          "userId":localStorage.getItem("user"),
          "monthExpiration":"undefined",
          "yearExpiration":"undefined",
          "cvv":"undefined",
          "cart":  loadedOrders
      }))
      alert("Your Order Will Arrive After 20 Minutes");
      history.push("/");
    } catch (err) {
      alert("Wrong Inputs");
    }
  }
  return (
    <div className="paymentPage">
      <div style={{ paddingTop: "5px" }}></div>
      <h2 className="pickyourpayment">
        Pick Your Payment And Get Your Order
        </h2>
      <div className="row">
        <div className="col-md-1"></div>
      <div className=" col-md-4 " style={{marginTop:"25px"}}>
    <form onSubmit={paymentCashSubmitHandler}>
      <div className="card card-body">
            <h4 className="card-title mb-4">Payment Cash</h4>
            <div className="form-group">
          
              <Input
              element="input"
              id="fullname"
              type="text"
              label="Full Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandlerCash}
                className="form-control"
                placeholder="Ex. John Smith"
              />
            </div>
            <div className="form-group">
              <Input
                type="text"
                className="form-control"
                element="input"
                id="address"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter an address."
                onInput={inputHandlerCash}
                placeholder="Ex. Street City "
              />
            </div>
            <div className="form-group">
              <Input
               type="text"
               id="phoneNumber"
               label="Phone Number"
               className="form-control"
               element="input"
               validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(8),VALIDATOR_MAXLENGTH(8)]}
               errorText="Please Enter a Valid Phone Number."
               onInput={inputHandlerCash}
               placeholder="Ex. 03 123456 "
              />
            </div>

            <p className="alert alert-success">
              {" "}
              <i className="fa fa-lock"></i> The order will take 20-25 minutes to arrive , Thank for your support.
            </p>
            <div className="row" style={{padding:"18px"}}>
              <div className="col-md-6" style={{fontWeight:"bold"}}>Total</div>
              <div className="col-md-6" style={{textAlign:"right",fontWeight:"bold"}}>{CheckoutCardPrice} L.L</div>
            </div> 
           
            <Button type="submit" disabled={!formStateCash.isValid}>
              Submit
            </Button>
          </div>
          </form>
      </div>
        <div  className="col-md-2"></div>
        <div className="card col-md-4 " style={{marginBottom:"25px",marginTop:"25px"}}>
        <form onSubmit={paymentOnlineSubmitHandler} >
          <div className="card-body">
            <h4 className="card-title mb-4">Payment Online</h4>
            <div className="form-group">
           
            <Input
                type="text"
                id="fullname"
                className="form-control"
                element="input"
                label="Name on card"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter Name on card."
                onInput={inputHandler}
                placeholder="Ex. Street City "
              />
            </div>
            <div className="form-group">
              <Input
               type="text"
               id="phoneNumber"
               label="Phone Number"
               className="form-control"
               element="input"
               validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(8),VALIDATOR_MAXLENGTH(8)]}
               errorText="Please Enter Phone Number."
               onInput={inputHandler}
               placeholder="Ex. 03 123456 "
              />
            </div>
            <div className="form-group">
            <Input
                type="text"
                className="form-control"
                element="input"
                id="address"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter an Address."
                onInput={inputHandler}
                placeholder="Ex. Street City "
              />
            </div>
            <div className="form-group">
                <Input
                  element="input"
                  label="Card number"
                  type="text"
                  id="cardNumber"
                  placeholder="Ex. 5168441223630339"
                  validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(16),VALIDATOR_MAXLENGTH(16)]}
                errorText="Please enter a Valid Card Number."
                  className="form-control"
                  onInput={inputHandler}
                  name="cardNumber"
                  
                />
            </div>

            <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                  <Input
                type="text"
                className="form-control"
                element="input"
                id="monthExpiration"
                label="Month Expiration"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter Expiration."
                onInput={inputHandler}
                placeholder="Ex. January "
              />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <Input
                type="text"
                className="form-control"
                element="input"
                id="yearExpiration"
                label="Year Expiration"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter Expiration."
                onInput={inputHandler}
                placeholder="Ex. 2020 "
              />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <Input
                type="text"
                className="form-control"
                element="input"
                id="cvv"
                label="CVV"
                validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(3),VALIDATOR_MAXLENGTH(3)]}
                errorText="Please enter a valid CVV."
                onInput={inputHandler}
                placeholder="Ex. 123 "
              />
                </div>
              </div>
            </div>
            <p className="alert alert-success">
              {" "}
              <i className="fa fa-lock"></i> The order will take 20-25 minutes to arrive , Thank for your support.
            </p>
            <div className="row" style={{padding:"18px"}}>
              <div className="col-md-6" style={{fontWeight:"bold"}}>Total</div>
              <div className="col-md-6" style={{textAlign:"right",fontWeight:"bold"}}>{CheckoutCardPrice} L.L</div>
            </div>
            <Button type="submit"  disabled={!formState.isValid}>
              Submit
            </Button>      
          </div>
        </form>
        </div>   
        <div  className="col-md-1"></div>      
      </div>
      <div className="support">We Appreciate your support for us!</div>
    </div>
    
  );
};

export default Checkout;
