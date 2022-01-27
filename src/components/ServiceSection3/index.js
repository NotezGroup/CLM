import React from 'react'
// import {Link} from 'react-router-dom'
import './style.css'


const ServiceSection3 = (props) => {
    return(
        <div className="work-area-2 section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-2 text-center">
                        <h2 className='rubrik'>This is what I do</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-accident"></i>
                            </div>
                            <div className="work-content">
                                <h2>Tit Tar Bonesetting</h2>
                                <p>Your joints can go out of alignment and cause pain as well as discomfort. I will be treating your joints and make sure they are all correctly aligned.</p>
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
                                <h2>Massage & Stretch for Muscles</h2>
                                <p>To give you some relief and to soften up the body I will be massaging the body.</p>
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
                                <h2>Nerve Stretching</h2>
                                <p>My unique treatment also helps with ”stretching” any nerves that might be causing pain.</p>
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
                                <h2>Release Emotional Baggage</h2>
                                <p>It often happens that when we experience pain [of any kind] we keep all the emotions that come with it inside, making way for emotions to bottle up. These repressed emotions can negatively affect ourselves in any aspects of our lives. I will be guiding you through exercises to help you release what’s holding you back.</p>
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
                                <h2>Daily Selfcare</h2>
                                <p>You will be given instructions suited specifically to your needs on how to take care of yourself after the treatment.</p>
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
                                <h2>Tours</h2>
                                <p>Every now and then we will be visiting all the Scandinavian countries for a 2-day tour to those who can’t travel all the way to my clinic.</p>
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