
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useHistory } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { Table } from 'react-bootstrap'
import './Makereservation.css';
import { getMarkets, makeReservation } from '../../actions/actions';
import { usersActions } from '../../redux/actions/users';
import { marketsActions } from '../../redux/actions/markets';
import { useDispatch, useStore } from 'react-redux';
import SharedTable from '../../shared/components/UIElements/SharedTable';
const Makereservation = (props) => {
  const history = useHistory();
    const auth = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const [formStateCash, inputHandlerCash, setFormDataCash] = useForm(
      {
        reservedBy: {
          value: '',
          isValid: false
        },
        reservationDate: {
          value: '',
          isValid: false
        },
        marketName: {
          value: '',
          isValid: true
        },
        numberOfPeople: {
          value: '',
          isValid: false
        },
        otherComments: {
          value: '',
          isValid: true
        }
      },
      false
    );

    const [loadedMarkets, setLoadedMarkets] = useState();
    const [loadedReservations, setLoadedReservations] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    var myarray = [];

      const dispatch = useDispatch()
      const store = useStore()
      useEffect(() => {
        const retrieveMarkets = async () => {
          await  dispatch(marketsActions.getMarkets())
          store.getState().marketsReducer.Mymarkets.payload.data.data.place.map(x => {
            myarray.push(x.title)
          })
          setLoadedMarkets(myarray)
        }
        retrieveMarkets();
      }, [sendRequest])
      useEffect(() => {
        const getAllReservations = async () => {
          await  dispatch(usersActions.getReservationById(localStorage.getItem('user')))
          setLoadedReservations(store.getState().getReservationByUserIdReducer.userInfo.payload.data.reservation);
          // store.getState().marketsReducer.Mymarkets.payload.data.data.place.map(x => {
          //   myarray.push(x.title)
          // })
          // setLoadedMarkets(myarray)
        }
        getAllReservations();
      }, [sendRequest])
  const addReservation = async event => {
    event.preventDefault();
    try {
      dispatch(usersActions.makereservation({
        "userId": auth.userId,
           "reservedBy":formStateCash.inputs.reservedBy.value,
           "marketName": formStateCash.inputs.marketName.value,
           "reservationDate": formStateCash.inputs.reservationDate.value,
           "numberOfPeople":formStateCash.inputs.numberOfPeople.value,
        "otherComments":formStateCash.inputs.otherComments.value
      }))
      alert("Reservation Done");
      history.push("/");
    } catch (err) {
      alert("Wrong Inputs");
    }
  }
  const handleChange = (e) => {
    console.log(e.target.value);
    formStateCash.inputs.marketName.value = e.target.value;
  //  this.setState({ fruit: e.target.value });
  }
const reservationTable =    [ { title: 'Restaurant Name' },{title: 'Reserved By'},{title: 'Nb of People'},{title: 'Date of reservation'}
,{title: 'Other comments'}]
  return (
    <div className="reservationPage">
      <div style={{ paddingTop: "5px" }}></div>
      <h2 className="pickyourpayment">
       Make your reservation
        </h2>
      <div className="row">
        <div className="col-md-1"></div>
      <div className=" col-md-4 " style={{marginTop:"25px"}}>
    <form onSubmit={addReservation}>
      <div className="card card-body">
      
            <div className="form-group">
              <label>Restaurant Name</label>
                {!isLoading && loadedMarkets && <select style={{border:'1px solid gray'}
                } onChange={handleChange} style={{padding:"6px", width:"100%"}}><option hidden>Pict a restaurant</option>{loadedMarkets.map(x => {
          return <option key={x} value={x}>{x}</option>
      })}</select>}
            </div>
            <div className="form-group">
              <Input
                type="text"
                className="form-control"
                element="input"
                id="reservedBy"
                label="Reserved By"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a reservation name."
                onInput={inputHandlerCash}
                placeholder="Reservation name"
              />
            </div>
            <div className="form-group">
              <Input
                type="number"
                className="form-control"
                element="input"
                id="numberOfPeople"
                label="Number of People"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter number of people."
                onInput={inputHandlerCash}
                placeholder="Number of Seats"
              />
            </div>
            <div className="form-group">
              <Input
                type="text"
                className="form-control"
                element="input"
                id="reservationDate"
                label="Reservation Date"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a date."
                onInput={inputHandlerCash}
                placeholder="pick a date"
              />
            </div>
            <div className="form-group">
              <Input
              element="textarea"
               id="otherComments"
               label="Other comment"
               className="form-control"
               type="text"
               errorText="Please Enter if you have any additional comments"
               validators={[VALIDATOR_MAXLENGTH(500)]}
               onInput={inputHandlerCash}
               placeholder="Enter a message"
              />
            </div>
           
            <Button type="submit" className="btn btn-primary" disabled={!formStateCash.isValid}>
              Submit
            </Button>
           
          </div>
          </form>
      </div>
        <div  className="col-md-2"></div>
        <div className=" col-md-4 " style={{marginTop:"25px"}}>

  {loadedReservations && <SharedTable  titleData={reservationTable.map(x =>{
           return <th>{x.title}</th>
         })} itemData={loadedReservations.map(x => {
          return   <tr key={x._id} >  
          <td style={{width:"106px "}}>{x.marketName}</td>
          <td style={{width:"106px "}}>{x.reservedBy}</td>
        <td style={{width:"106px"}}>{x.numberOfPeople}</td>
        <td style={{width:"106px "}}>{x.reservationDate}</td>
          <td style={{width:"106px "}}>{x.otherComments}</td>
          </tr>
        })}>
     </SharedTable>}
  
        </div>   
        <div  className="col-md-1"></div>      
      </div>
      <div className="support">We Appreciate your support for us!</div>

    </div>
    
  );
};

export default Makereservation;
