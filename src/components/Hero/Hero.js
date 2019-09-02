import React from 'react';
import PropTypes from 'prop-types'
import {NEW_GAME_EXAMPLE} from "../../constants/apiConstants";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero(props) {
    let slideTitleArr = [];
    let slideArr = NEW_GAME_EXAMPLE.map((slide,index) => {
        console.log(slide)
        slideTitleArr.push(slide.name);
        return <img key={slide.name} src={slide.image} alt={slide.name} />
    }
        )

    return (
        <div className="carousel-container">
            <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={12000}
            transitionTime={1000}
            >
                {slideArr}
            </Carousel>
        </div>
    )
}

export default Hero
