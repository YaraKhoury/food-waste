import React, { useEffect,useState } from 'react';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './PlaceForm.css';
import MarketList from '../components/MarketList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { marketsActions } from '../../redux/actions/markets';
const MyMarkets = () => {
  const [loadedMarkets, setLoadedMarkets] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const store = useStore()

  const dispatch = useDispatch()
  useEffect(() => {
    const retrieveMarkets = async () => {
      await  dispatch(marketsActions.getMarkets())
      setLoadedMarkets(store.getState().marketsReducer.Mymarkets.payload.data.data.place);
    }
    retrieveMarkets();
  }, [sendRequest])

  return (
    <React.Fragment>
    {isLoading && (
      <div className="center">
        <LoadingSpinner />
      </div>
    )}
    {!isLoading && loadedMarkets &&
    <div>
      <h2 style={{textAlign:"center",fontSize:"45px",padding:"25px",letterSpacing:"6px",boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)"}}>Our Markets</h2>
     <div className="container" style={{marginTop:"20px"}}>
       <div className="row" style={{width:"50%",margin:"auto",boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)",padding:"20px",backgroundColor:"rgb(189, 188, 188)"}}>
         <div className="col-md-8" style={{fontWeight:"bold"}}>
           Now, you can reserve your table in your preferable restaurant from our website !!
         </div>
         <div className="col-md-4">
           <Link to="reservation">
           <button className="btn btn-info">Reserve</button>
           </Link>
         
         </div>
       </div>
     </div>
      <MarketList items={loadedMarkets} />
     
    </div>
    }
  </React.Fragment>
  );
};

export default MyMarkets;


// we are retreiving all the markets presents 