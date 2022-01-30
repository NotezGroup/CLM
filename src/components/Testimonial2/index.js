
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
                            <h2>Reviews</h2>
                        </div>
                    </div>
                    <div className="wpo-testimonial-main">
                         <Slider {...settings}>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Wow completely scary feeling the pain in the foot is gone the pain in the elbow almost completely gone tender in the neck but much clearer 
                                            in the knob than in a very long time! i was very skeptical and nervous before! Thank you Stiven for the help! </p>
                                        <div className="wpo-testimonial-item2">
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Katarina Larsson</h4>
                                                <span>I recommed CLM Scandinavia - Stiven</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Absolutely!
                                            He uses a technology that is much kinder and gentler than it can look on video.
                                            I feel like a new person and can hold my back again. It is difficult to describe 
                                            the feeling but it feels as if I have regained contact with the body again. Painless 
                                            and mobile again. Thanks Stiven! </p>
                                        <div className="wpo-testimonial-item2">
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Viveca Larsson</h4>
                                                <span>I recommed CLM Scandinavia - Stiven</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Chris Leong was the guy who tought Master Steven what he does to 
                                            correct my body. I can now move my shoulder. Really love how he can help this guy! So Thx master </p>
                                        <div className="wpo-testimonial-item2">
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Mathiaz Rickman</h4>
                                                <span>I recommed CLM Scandinavia - Stiven</span>
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
          
          
          
          
