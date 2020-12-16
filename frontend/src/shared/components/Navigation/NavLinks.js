import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import Mydropdown from '../FormElements/Mydropdown';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);
  const arrayOfData =
   [ { id: '1', title: 'Markets', to:"/market" },
   { id: '2', title: 'Products',to:"/products"  },
   { id: '3', title:'Recipes',to:"/recipes" } ]

   var handleSelectChange = (selectedValue) =>{ console.log(selectedValue) }; 
   console.log(props);
  return (
    <ul>
      
      {!auth.isLoggedIn && (
        <li >
          <NavLink to="/auth" className="signin" >Sign In</NavLink>
        </li>
      )}
      <div className="row">

      <div className="col-md-3">
        {auth.isLoggedIn && (
        <div >
           {/* <NavLink to="/cart" className="mycart" > */}
      <Mydropdown arrayOfData={arrayOfData} ></Mydropdown>
         
           
           {/* <button className="btn btn-dark">Category</button> */}
             {/* </NavLink> */}
        </div>
      )}
  </div>
        <div className="col-md-3">
        {auth.isLoggedIn && (
        <div >
           <NavLink to="/feedbacks" className="mycart" >
           <button className="btn btn-primary">Feedbacks</button>
             </NavLink>
        </div>
      )}
      
        </div>

        <div className="col-md-3">
        {auth.isLoggedIn && (
        <div >
           <NavLink to="/cart" className="mycart" >
           <button className="btn btn-dark">My Cart</button>
             </NavLink>
        </div>
      )}
      
        </div>
        <div className="col-md-3">
        {auth.isLoggedIn && (
        <div>
          <button onClick={auth.logout} className="btn btn-danger">LOGOUT</button>
        </div>
      )}
</div>
      </div>

      
    </ul>
  );
};

export default NavLinks;
