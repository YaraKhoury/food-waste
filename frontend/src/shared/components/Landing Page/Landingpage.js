import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyMarkets from '../../../places/pages/MyMarkets'
import Products from '../../../products/pages/Products';
import './landingpage.css';
class Landingpage extends Component {
	
    render() {
        return (
            <div>
                <div style={{backgroundImage:"url('https://popolr.com/Assets/Images/landing/how.jpg')",
                 width:"100%",height:"800px",marginTop:"-50px"}}>
               <h2 className="WelcomePage">Welcome To our Page</h2>
                <h3 className="WelcomeFoodWaster">Food Waste</h3>
                </div>
                <div className="coupons">
                    <div className="container" style={{marginLeft:"180px"}}>  
		<div className="row">
			<div className="col-md-3 design " style={{color:"white"}}>
				<h3>Buy your product in a simple way</h3>
			</div>
			<div className="col-md-3 design" style={{color:"white"}}>
				<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
				<h4>LOGIN TO YOUR ACCOUNT</h4>
				<p>Create your account to let us know who you are!</p>
			</div>
			<div className="col-md-3 design" style={{color:"white"}}>
				<span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
				<h4>SELECT YOUR ITEM</h4>
				<p>Go To Any Market you want and select what you PREFER!</p>
			</div>
			<div className="col-md-3 design" style={{color:"white"}}>
				<span className="glyphicon glyphicon-credit-card" aria-hidden="true"></span>
				<h4>MAKE PAYMENT</h4>
				<p>You can pay Online or Cash, NOT A PROBLEM!</p>
			</div>
			<div className="clearfix"> </div>
		</div>
        </div>
</div>
<div class="ProductSales">
<div class="bg">
    <div class="centerer">
		<Link to='/products' class="button">Product Sales</Link>
    </div>
  </div>

</div>

                <MyMarkets></MyMarkets>
				<h2 className="aboutustitle">About us</h2>
				<div className="aboutUs">
					<div style={{textAlign:"center"}}>
					
						<p className="aboutusdescription">The foodWaste website presents the yummiest food with the lowest price! It shows different types 
							of foods like knefeh, manakish, burger, fries , hommos, and many more. Our main goal behind this
							 website, is to help you buy what you love and to save money at the same time. We hope that you
							  will have a “yummii “memory with us and we wish to see you soon, don’t be late! Buy and save!
							  </p>
					</div>
					</div>
            </div>
        );
    }
}

export default Landingpage;