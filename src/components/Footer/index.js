import React from 'react'
import './style.css'
// import {Link} from 'react-router-dom'
// import logo from '../header3/clm-logo.png'


const Footer = (props) => {
    return(
        <div className={`wpo-footer-area ${props.Ftclass}`}>
            <div className="container">
                <div className="wpo-footer-top">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                            <div className="footer-logo">
                             <img src={require('./clm-logo-big.png')}/>
                                 {/* <h1 className='logotyp'>LOGO</h1> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-9 col-12">
                            <div className="wpo-footer-menu">
                                <ul>
                                    {/* <li><Link to="/about">About</Link></li>
                                    <li><Link to="/protfolio">Portfolio</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="wpo-footer-social">
                                <ul>
                                    <li><a href="https://www.facebook.com/CLMScandinavia"><i className="fa fa-facebook"></i></a></li>
                                    {/* <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li> */}
                                    <li><a href="https://www.instagram.com/clmscandinavia/"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`wpo-footer-bottom ${props.Fbclass}`}>
                <span>© 2021 CLM Scandinavia  AB. All rights reserved</span>
                <span>Website created by: <a href="http://notez.se/">www.notez.se</a></span>

            </div>
        </div>
    )
}

export default Footer;