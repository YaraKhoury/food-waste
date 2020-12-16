
import React, { useEffect,useState } from 'react';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';
import { getFeedbacks, getReservations } from '../actions/actions';
import './feedback.css';
import Addfeedback from './Addfeedback';
import { Link } from 'react-router-dom';
import Charts from './Charts';
import { Chart } from 'react-charts'
import { useDispatch, useStore } from 'react-redux';
import { usersActions } from '../redux/actions/users';
const Feedback = () => {
    const [loadedFeedbacks, setLoadedFeedbacks] = useState();
    const [loadedReservations, setLoadedReservation] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    var myarray = [];
    const store = useStore();
    const dispatch = useDispatch()
        useEffect(() => {
      const retrieveFeedbacks = async () => {
        await dispatch(usersActions.getFeedbacks())
        console.log(store.getState().getFeedbackReducter.users.Reviews);
        store.getState().getFeedbackReducter.users.Reviews.map(x => {
          if(x != null){
            x.map(y => {
              myarray.push(y)
            })
          }
          setLoadedFeedbacks(myarray)
        })
        }
       retrieveFeedbacks();
      }, [sendRequest]) 
      const Sahseh = [];
      const aboUWadih = [];
      const Falalelna = [];
      const burgerQueen = [];
      const Mashawi = [];
      const zaatarWbhar = [];
      const homemade = [];
      useEffect(() => {
  
        const getallReservations = async () => {
          await dispatch(usersActions.getReservations());
          console.log(store.getState().getReservationsReducer.users.data.reservation)
          setLoadedReservation(store.getState().getReservationsReducer.users.data.reservation)
          store.getState().getReservationsReducer.users.data.reservation.map(x => {
              if(x.marketName === "Sahseh"){
                Sahseh.push(x);
              } else if(x.marketName === "Abou Wadih"){
                aboUWadih.push(x);
              } else if(x.marketName === "Falafelna"){
                Falalelna.push(x);
              }  else if(x.marketName=== "Burger Queen") {
                burgerQueen.push(x);
              } else if(x.marketName === "Mashawi"){
                Mashawi.push(x);
              } else if(x.marketName === "Home Made"){
                homemade.push(x);
              } else if(x.marketName === "Zaatar w Bhar"){
                
                zaatarWbhar.push(x);
              }
            })
            localStorage.setItem("Sahseh",Sahseh.length)
            localStorage.setItem("aboUWadih",aboUWadih.length)
            localStorage.setItem("Falalelna",Falalelna.length)
            localStorage.setItem("burgerQueen",burgerQueen.length)
            localStorage.setItem("Mashawi",Mashawi.length)
            localStorage.setItem("HomeMade",homemade.length)
            localStorage.setItem("zaatarWbhar",zaatarWbhar.length)
        };
        getallReservations();
      }, [sendRequest]);

      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
      const tooltip = React.useMemo(
        () => ({
          render: () => {
            return <div style={{padding:"15px",fontWeight:"bold",letterSpacing:"2px"}}>Hello</div> 
          }
        }),
        []
      )
        return (
            <React.Fragment>
            {isLoading && (
              <div className="center">
                <LoadingSpinner />
              </div>
            )}
                   <h2 style={{textAlign:"center",fontSize:"45px",padding:"25px",letterSpacing:"6px",boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)"}}>Our Feedbacks</h2>
               {!isLoading && loadedFeedbacks &&
     
     
            <div className="row">
                <div className="col-md-6">
             
                <div>
                    {loadedFeedbacks.map(x=> {
                        return (<div className="container myfeedback" key={x.id}><div className="row"    > 
                        <div className="col-lg-12 col-md-12" >
                          <div className="mb-12" style={{padding:"15px"}}>
                              <div className="row">
                                <div className="col-md-4 col-lg-3 col-xl-3">
                                  <div className="overlay z-depth-1 rounded mb-3 mb-md-0">
                                    <img 
                                      src="https://www.staffsprep.com/software/flat_faces_icons/png/flat_faces_icons_circle/flat-faces-icons-circle-3.png" 
                                      alt="Sample" style={{height:"60px",width:"70px"}}/>
                                  </div>
                                </div>
                                <div className="col-md-8 col-lg-9 col-xl-9">
                                        <h5 className="feedbackdescription">{x.description}</h5>
                                </div>
                              </div>
                          </div>
                    </div>
                    </div>
                    </div>)
           
           } )}
                </div>
           
                </div>
                <div className="col-md-6" >
                  <div style={{marginLeft:"45px",marginTop:"20px"}}>
                  <h5 >Numbers of reservation from our site!</h5>
                  </div>
                  <div style={{marginTop:"20px"}}>
                  {/* <Charts /> */}
                  {!isLoading && loadedReservations && 
                   <Charts   axes={axes} tooltip={tooltip}></Charts>}
                  </div>
                 
                <Link  to={`/feedbacks/reviewus`}>
                <button className="btn btn-primary asd">Review us</button>
                </Link>
               
                
                </div>
            </div>
           }
          </React.Fragment>
        );
    
}

export default Feedback;

// we are retreiving all the feedback through user id