import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="section-footer border-top" style={{boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)"}} >
            <div className="container">
            <div className="footer-top ">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="mr-md-4">
                            <h5 className="title" style={{margin:"28px"}}>Contact us</h5>
                            <p>Well Dear, If you want any further informations about us you can contact us any time. </p>
                            <ul >
                                <li  style={{color:"black",fontSize:"15px",padding:"5px",margin:"0"}}> yarak@gmail.com</li>
                                <li  style={{color:"black",fontSize:"15px",padding:"5px",margin:"0"}}> (961) 03 141235 </li>
                                <li  style={{color:"black",fontSize:"15px",padding:"5px",margin:"0"}}> Mon-Sat 10:00pm - 7:00pm</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md col-6">
                    </div>
                    <div className="col-md col-6">
                    </div>
                    <div className="col-md-4 col-12">
                    <h5 className="title" style={{margin:"28px"}}>Follow us</h5>
                    <ul>
                        <li style={{color:"black",fontSize:"15px",padding:"20px 15px 0 58px "}}>
                        <a className="socialMedia" href={'http://facebook.com'} target="_blank">Facebook
                        <i className="fa fa-facebook"></i>
                        </a>
                           
                        </li>
                           <li style={{color:"black",fontSize:"15px",padding:"20px 15px 0 58px",margin:"0"}}>
                           <a className="socialMedia" href={'http://instagram.com'} target="_blank">Instagram    <i className="fa fa-instagram"></i></a>
                        
                        </li>  
                         <li style={{color:"black",fontSize:"15px",padding:"20px 15px 0 58px",margin:"0"}}>
                         <a className="socialMedia" href={'http://twitter.com'} target="_blank">Twitter   <i className="fa fa-twitter"></i></a>
                   
                        </li>
                    </ul>
                    </div>
                </div> 
            </div>	
        </div>
        </div>
        );
    }
}

export default Footer;