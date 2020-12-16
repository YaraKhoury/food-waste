import React, { useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import OrdersScreen from './orders/Orderscreen';
import Checkout from './checkout/Checkout';
import Landingpage from './shared/components/Landing Page/Landingpage';
import Market from './places/pages/Market';
import Footer from './shared/components/Footer/Footer';
import Feedback from './feedbacks/Feedback';
import Addfeedback from './feedbacks/Addfeedback';
import { useHttpClient } from './shared/hooks/http-hook';
import Products from './products/pages/Products';
import Makereservation from './reservations/pages/Makereservation';
import MeatRecipes from './recipes/pages/MeatRecipes';
import Recipes from './recipes/pages/Recipes';
import ChickenRecipes from './recipes/pages/ChickenRecipes';
import FishRecipes from './recipes/pages/FishRecipes';
import VegeterianRecipes from './recipes/pages/VegeterianRecipes';
import MyMarkets from './places/pages/MyMarkets';
import { Provider } from "react-redux";
import {  configureStore } from './redux/store/store';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    localStorage.removeItem('user');
  }, []);
  useEffect(() => {
    console.log(store)
    const userSession = localStorage.getItem('user') || '';
      if(userSession.length !== 0){
        setIsLoggedIn(true)
        setUserId(userSession);
      }
  }, [sendRequest]);
  let routes;
  const store = configureStore();
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Landingpage />
        </Route>
        <Route path="/places/:placeId">
          <Market />
        </Route>
        <Route path="/cart" exact>
          <OrdersScreen />
        </Route>
        <Route path="/market" exact>
          <MyMarkets />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/reservation" exact>
          <Makereservation />
        </Route>
        <Route path="/feedbacks" exact>
          <Feedback />
        </Route>
        <Route path="/recipes" exact>
          <Recipes />
        </Route>
        <Route path="/recipes/meat" >
          <MeatRecipes />
        </Route>
        <Route path="/recipes/chicken" >
          <ChickenRecipes />
        </Route>
        <Route path="/recipes/fish" >
          <FishRecipes />
        </Route>
        <Route path="/recipes/vegeterian" >
          <VegeterianRecipes />
        </Route>
        <Route path="/feedbacks/reviewus">
          <Addfeedback />
        </Route>
        <Route path="/cart/checkout">
          <Checkout />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Landingpage />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
    return (
      <Provider store={store}>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout
        }}
      >
        <Router>
          <MainNavigation />
          <main>{routes}</main>
          <Footer/>
        </Router>
      </AuthContext.Provider>
      </Provider>
    );
  }
 

export default App;
