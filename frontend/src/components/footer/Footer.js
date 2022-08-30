import React from 'react';
import './Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa"

export default function Footer() {
    return (
        <>
            <MDBFooter bgColor='dark' >

                <div className='footer'>
                    <div className='footer_first' >
                        <div className='first_text'>

                            <p>Get connected with us on social networks:</p>
                        </div>
                        <div className='first_icons'>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="facebook-f" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="twitter" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="google" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="instagram" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="linkedin" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="github" />
                            </a>
                        </div>

                    </div>

                    <div className='footer_second'>
                        <div className='company'>
                            <h5 className='company_name text-uppercase fw-bold mb-4'>VEHICIFY </h5>
                            <p className='company_des'>Pakistan's first Imported Car Auction Sheet Verification through Blockchain Technology.</p>

                        </div>
                        <div className='products'>
                            <h6 className='product text-uppercase fw-bold mb-4'>Products </h6>
                            <ul className='unorder'>
                                <li><a href=''>Home</a></li>
                                <li><a href=''>Verification</a></li>
                                <li><a href=''>About Us</a></li>
                                <li><a href=''>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='contacts'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Karachi, PAK
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                contact@vehicify.co
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" />+923 113 382 281
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" />+923 162 828 064
                            </p>
                        </div>

                    </div>

                    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        <p>Made with Love in Pakistan
                        </p>
                        © 2022 Copyright:
                        <a className='text-reset fw-bold' href='https://Vehicify.com/'>
                            Vehicify.co
                        </a>
                    </div>

                </div>

            </MDBFooter>




        </>
    );
}