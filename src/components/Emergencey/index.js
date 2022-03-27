import React from 'react'
import './style.css'

const Emergencey = () => {
    return(
        <div className="emergencey-area">
            <div className="container"><div className='containerBox'></div>
                <div className="emergencey-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 textenWidth">
                            <div className="emergencey-wpo-service">
                                <div className="emergencey-icon">
                                    <i className="fi flaticon-heart"></i>
                                </div>
                                {/* <div className="emergencey-text">
                                    <h2>More about the treatment</h2>
                                    
                                    

                                   
                                        <div class="arroww">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                        
                                        </div>







                                </div> */}
                                <div className="emergencey-text">
                                    <h2>Emergency Service</h2>
                                    <p>please contact us for more information to get a booking faster than what is available </p>
                                    <span>Call : +4676 23 30 381</span>
                                </div>

                            </div>
                        </div>
                        
                        {/* <div className="col-lg-6 col-md-6">
                            <div className="emergencey-hour">
                                <div className="emergencey-icon">
                                    <i className="fi flaticon-time"></i>
                                </div>
                                <div className="emergencey-text">
                                    <h2>Öppettider</h2>
                                    <ul>
                                        <li>Mån - Fre<span>08:00 - 21:00</span></li>
                                        <li>Lör - Sön<span>08:00 - 19:00</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emergencey;