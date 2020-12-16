import React, {useContext, useEffect, useState} from 'react';
import { makeFeedback, getFeedbackbyUserId,removeMyFeedback } from '../actions/actions';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from "../shared/hooks/http-hook";
import { useForm } from '../shared/hooks/form-hook';
import Input from '../shared/components/FormElements/Input';
import './feedback.css';
import { Redirect,useHistory } from 'react-router-dom';
import {
  VALIDATOR_REQUIRE
} from '../shared/util/validators';
import { useDispatch, useStore } from 'react-redux';
import { usersActions } from '../redux/actions/users';
function Addfeedback(props) {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [myloadedFeedbacks, setLoadedFeedback] = useState();
    const [formState, inputHandler, setFormData] = useForm(
        {
          description: {
            value: '',
            isValid: false
          }
        },
        false
      );
const dispatch = useDispatch();
const store = useStore();
      useEffect(() => {
        const fetchComments = async () => {
        await  dispatch(usersActions.getFeedbackByUserId(localStorage.getItem('user')))
        console.log(store.getState().getFeedbackByUserId)
        setLoadedFeedback(store.getState().getFeedbackByUserId.userInfo.payload.data.Reviews)
        };
        fetchComments();
      }, [sendRequest]);
    
    const addFeedback = async event => {
        event.preventDefault();
          try {
            dispatch(usersActions.addFeedback({
              "userId":auth.userId,
               "review": formState.inputs.description.value
        
          }))
            alert("We Thank you for your support!");
            history.push("/");
          } catch (err) {
            alert("Wrong Inputs");
          }
      };

      const removeFeedback =  (cart) => {
        try {
          dispatch(usersActions.removeFeedback({
            "userId":auth.userId,
            "commentId":cart.id
          }))
          // const removemyFeedback =  removeMyFeedback({
          //   "userId":auth.userId,
          //   "commentId":cart.id
          // })
         const newList = myloadedFeedbacks.filter(x=>
          x.id != cart.id 
     )
    setLoadedFeedback(newList);
      } catch {
        console.log("eror");
      }
    }
    return (
        <div>
    <div  style={{
            boxShadow: "0 4px 17px rgba(0, 0, 0, 0.10)",
            padding: "25px",
            width:"50%",
            margin:"auto"
          }}>
              <form onSubmit={addFeedback}>
          <div className="form-group" >
			<label>Review Us!</label>
            
            <div className="form-group">
          
          <Input
          element="textarea"
          id="description"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a Description."
          onInput={inputHandler}
            className="form-control"
            placeholder="Comment Here."
            style={{border:"1px solid gray"}}
          />
        </div>
		</div>
        <button className="btn btn-primary">Submit</button>
        </form>
        <div>
        <h2 style={{textAlign:"center",fontSize:"45px",padding:"25px",letterSpacing:"6px",boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)"}}>Your Reviews</h2>
        {myloadedFeedbacks && myloadedFeedbacks.map(feedbacks=> {
             return (
             <div className="container myfeedback" key={feedbacks.id}><div className="row"    > 
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
                                <h5 className="feedbackdescription">{feedbacks.description}</h5>
                        </div>
                      </div>
                  </div>
                  <button className="btn btn-danger"  onClick={()=>removeFeedback(feedbacks)}>Delete</button>
            </div>
            </div>
            </div>)
           } )}
        </div>
        </div>
        <div className="support">We Appreciate your support for us!</div>
        </div>
    
    );
}

export default Addfeedback;