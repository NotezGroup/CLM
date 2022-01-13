import React from 'react'
import './style.css'
import ContactForm from '../ContactFrom'

import contact1 from '../../images/wpo-service/icon5.png' 
import contact2 from '../../images/wpo-service/icon6.png' 
import contact3 from '../../images/wpo-service/icon7.png' 

const ContactArea = (props) => {
    return(
        <section className={`wpo-contact-area section-padding ${props.contactclass}`}>
            <div className="wpo-wpo-contact-form-map">
                <div className="containerr">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="kontaktText">Kontakt</h2>
                        </div>
                    </div>
                   
                        
                                    
                                        
                        {/* <ContactForm/> */}
                    
                        
                       
                            <div className="info-item">
                                <h2>Emporia Hyllie, Malmö</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <img src={contact1} alt=""/>
                                    </div>
                                    <div className="info-text">
                                        <span>Plats</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item">
                                <h2>info@clm.se</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <img src={contact2} alt=""/>
                                    </div>
                                    <div className="info-text">
                                        <span>Email</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item">
                                <h2>+46700 00 00 00</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <img src={contact3} alt=""/>
                                    </div>
                                    <div className="info-text">
                                        <span>Telefon</span>
                                    </div>
                                </div>
                            </div>
                        
                               
                            
                    
                </div> 
            </div>
        </section>
    )
}

export default ContactArea;