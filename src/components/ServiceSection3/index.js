import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'


const ServiceSection3 = (props) => {
    return(
        <div className="work-area-2 section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-2 text-center">
                        <h2 className='rubrik'>Det här är vad jag gör.</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-accident"></i>
                            </div>
                            <div className="work-content">
                                <h2>Sports Injury</h2>
                                <p>Jag gör mitt bästa för att få dig att komma ut härifrån nöjd, hoppas på en super nöjda kunder</p>
                                {/* <Link to="/service-details">Läs mer</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-lung"></i>
                            </div>
                            <div className="work-content">
                                <h2>Andning</h2>
                                <p>Jag gör mitt bästa för att få dig att komma ut härifrån nöjd, hoppas på en super nöjda kunder</p>
                                {/* <Link to="/service-details">Läs mer</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-bone"></i>
                            </div>
                            <div className="work-content">
                                <h2>Ben</h2>
                                <p>Jag gör mitt bästa för att få dig att komma ut härifrån nöjd, hoppas på en super nöjda kunder</p>
                                {/* <Link to="/service-details">Läs mer</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-heart-1"></i>
                            </div>
                            <div className="work-content">
                                <h2>Hälsan</h2>
                                <p>Jag gör mitt bästa för att få dig att komma ut härifrån nöjd, hoppas på en super nöjda kunder</p>
                                {/* <Link to="/service-details">Läs mer</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-scalpel"></i>
                            </div>
                            <div className="work-content">
                                <h2>Jobb</h2>
                                <p>Jag gör mitt bästa för att få dig att komma ut härifrån nöjd, hoppas på en super nöjda kunder</p>
                                {/* <Link to="/service-details">Läs mer</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-drug"></i>
                            </div>
                            <div className="work-content">
                                <h2>Medicinsk</h2>
                                <p>Jag gör mitt bästa för att få dig att komma ut härifrån nöjd, hoppas på en super nöjda kunder</p>
                                {/* <Link to="/service-details">Läs mer</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection3;