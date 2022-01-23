
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'

class TestSlider2 extends Component {
    render( props ) {
        
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            margin: 10,
            loop: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            
        };
        return (
            <div className={`wpo-testimonial-area wpo-testimonial-area-2 section-padding ${this.props.testclass}`}>
                <div className="container">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Recensioner</h2>
                        </div>
                    </div>
                    <div className="wpo-testimonial-main">
                         <Slider {...settings}>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Jag har varit under en behandling här hos Stivo och här har jag känt mig väldigt välkommen och skulle vilja komma hit igen, han är duktig </p>
                                        <div className="wpo-testimonial-item2">
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Ali Hammoude</h4>
                                                <span>Webbutvecklare på hög nivå</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Jag har varit under en behandling här hos Stivo och här har jag känt mig väldigt välkommen och skulle vilja komma hit igen, han är duktig </p>
                                        <div className="wpo-testimonial-item2">
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Taleb Hammoude</h4>
                                                <span>Alis chef</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Jag har varit under en behandling här hos Stivo och här har jag känt mig väldigt välkommen och skulle vilja komma hit igen, han är duktig </p>
                                        <div className="wpo-testimonial-item2">
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Stivo Kuchak</h4>
                                                <span>CEO of CLM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default TestSlider2;
          
          
          
          
