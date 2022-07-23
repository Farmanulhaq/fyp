import React from "react";

import './Footer.css'

function Footer(){
    return(
        
            <footer className="footer">
                <div className="container" >
                    <div className="row">
                        <div className="footer-col">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Get Help</h3>
                            <ul>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Payment Options</a></li>


                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>online Shop</h3>
                            <ul>
                                <li><a href="#">Cars</a></li>
                                <li><a href="#">Bike</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Follow Us</h3>
                           <div className="social-links">
                               <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                               <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                               <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>


                            </div>
                        </div>
                    </div>
                </div>
                
                
            </footer>
        
    )
}
export default Footer