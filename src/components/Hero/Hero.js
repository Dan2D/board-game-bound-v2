import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {NEW_GAME_EXAMPLE} from "../../constants/apiConstants";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero(props) {
    if (props.isLoading) {
        return <div>LOADING</div>
    }
    let slideTitleArr = [];
    // ADD LINK LATER
    let slideArr = props.games.map((slide,index) => {
        slideTitleArr.push(slide.name);
        return <img className="carousel__image" key={slide.name} src={slide.image} alt={slide.name} />
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
};

const mapStateToProps = state => {
    return {
        games: state.games.new.list,
        isLoading: state.games.new.isLoading
    }
}

export default connect(mapStateToProps)(Hero)
