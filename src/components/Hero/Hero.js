import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import {setDetailImg} from "../../actions/gamesActions";
import PropTypes from 'prop-types'

import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const mapDispatchToProps = dispatch => {
    return {
        setDetailImg: (imgUrl) => {
            dispatch(setDetailImg(imgUrl))
        }
    }
}

function Hero(props) {
    const {setDetailImg} = props;

    if (props.isLoading) {
        return <div>LOADING</div>
    }

    function handleSlideClick(e) {
        let imgUrl = e.target.children[0].src;
        setDetailImg(imgUrl);
    }

    let slideTitleArr = [];
    // ADD LINK LATER
    let slideArr = props.games.map((slide,index) => {
        slideTitleArr.push(slide.name);
        return (
        <Link key={slide.name}  className="carousel__lnk" to={`/games?name=${slide.name}&year=${slide.year_pub}`}  onClick={(e) => handleSlideClick(e)}>
            <img className="carousel__image" src={slide.image} alt={slide.name} />
        </Link>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
