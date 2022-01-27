import React, { Suspense, useRef } from 'react'
// import {Link}  from 'react-router-dom';
// import slimg from '../../images/slider/hero-shape2.png'

import './style.css'

import Skeleton from '../Skeleton-test'
import useScrollPosition from "./useScrollPosition";


import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Hero8 = ( props ) => {

       
    const scrollPosition = useScrollPosition();
    
    const scroll = useRef(scrollPosition)

    scroll.current = scrollPosition/3700;
    
    return(<>
        <section className="wpo-hero-style-7">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row headertext">
                        <div className="texten col-lg-7 col-md-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">A holistic approach</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">Treatment for the body, mind & soul</span>
                            
                        </div>
                    </div>
                </div>
                
                <div className="slide-img">
                    {/* <img src={slimg} alt=""/>*/}
                    <Canvas
                            shadows
                            raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
                            <ambientLight intensity={1} />
                            <Suspense fallback={null}>
                            <Skeleton scroll={scroll} />
                            <Environment preset="sunset" />
                            </Suspense>
                    </Canvas>
                  
                    
                </div>
                
            </div>
        </section>
        </>
    )
}
export default Hero8;