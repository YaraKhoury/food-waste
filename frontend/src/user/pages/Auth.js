import React, { useState, useContext, useReducer } from 'react';
import { getUsers, login,signUp } from '../../actions/actions';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { usersActions } from '../../redux/actions/users';
import { useHistory } from 'react-router-dom';
import { userReducer } from '../../redux/reducers/userReducer';
const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const dispatch = useDispatch();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const responseGoogle = async (response) => {
    console.log(response);
    await getUsers().then(res => {

   const findUser =   res.data.users.find(el => el.email === response.profileObj.email )
  if(findUser == undefined){
   const signUpgoogleUser = async () => {
      try{
        const signUser = await signUp({
          name: response.profileObj.name,
          email: response.profileObj.email,
          password: ( Math.floor(Math.random() * 10000 * 10000).toString())
        })
        auth.login(signUser.user.id)
        localStorage.setItem('user', signUser.user.id);
      } catch (err) {
        alert("Wrong Username or Password");
      }
     
    }
    signUpgoogleUser();
  } else {
    auth.login(findUser.id)
    localStorage.setItem('user',findUser.id)
  }
 })
    
  }
 const handleLogoutFailure = () => {
    alert('Failed to log out')
    
  }
const store = useStore();
  const histrosy = useHistory();
  const myState = useSelector(state => state )
  const { loading, userInfo, errorr } = myState;
  const myreducer = useReducer(userReducer, 0);
  const authSubmitHandler = async event => {
    const RandomId = Math.floor(Math.random() * 10000 * 10000);
    event.preventDefault();
    if (isLoginMode) {
       await  dispatch(usersActions.login_User({email:formState.inputs.email.value, password:formState.inputs.password.value}))
       if(store.getState().userLoginReducer.isLoggedIn === true){
         auth.login(store.getState().userLoginReducer.userInfo.payload.user.id)
        localStorage.setItem("user",store.getState().userLoginReducer.userInfo.payload.user.id)
        histrosy.push('/')
       } else {
         alert("Wrong Username or Password")
       }
    } else {
      dispatch(usersActions.registerUser({
        name:formState.inputs.name.value,
      email:formState.inputs.email.value,
      password:formState.inputs.password.value}));
    console.log(store.getState());
      // auth.login(RandomId);
    //  localStorage.setItem('user',RandomId);
    alert("Account Registered Successfull!")
    setIsLoginMode(true)
    
      histrosy.push('/auth');
    }
  };

  return (
    <React.Fragment>
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              placeholder="Enter your name"
              onInput={inputHandler}
              
            />
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            placeholder="Enter your Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
        <div style={{marginTop:"25px"}}>
        <GoogleLogin
          clientId="730239209869-s7lvkh5a6r935bhf95374nmoba0n321d.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={handleLogoutFailure}
          cookiePolicy={'single_host_origin'}
         className="googleLoginButton"
        />,
      </div>
      </Card>
      
     
    </React.Fragment>
  );
};

export default Auth;

//  We login and register 