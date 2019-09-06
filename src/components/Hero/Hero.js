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
    const GAMES = props.games.list;
    const LOADING = props.games.isLoading;

    if (LOADING) {
        return <div>LOADING</div>
    }

    Hero.propTyps = {
        games: PropTypes.arrayOf(PropTypes.object)
    }

    function handleSlideClick(e) {
        let imgUrl = e.target.children[0].src;
        setDetailImg(imgUrl);
    }

    function handleSlideChange(e) {
        let slideTitles = document.querySelectorAll(".carousel__slide-title");
        slideTitles.forEach(slide => slide.classList.remove('selected'));
        if (slideTitles[e]){
            slideTitles[e].classList.add("selected");
        }
    }

    let slideTitleArr = [];
    let slideArr = GAMES.map((slide,index) => {
        slideTitleArr.push(<p key={slide.name} className={`carousel__slide-title ${index < 1 ? "selected" : ""}`}>{slide.name}</p>);
        return (
        <Link key={slide.name} className="carousel__lnk" to={`/games?name=${slide.name}&year=${slide.year_pub}`}  onClick={(e) => handleSlideClick(e)}>
            <img className="carousel__image" src={slide.image} alt={slide.name} />
        </Link>
        )}
    )

    return (
        <div className="carousel-flex-container">
            <div className="carousel-container">
                {slideTitleArr}
                <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={12000}
                transitionTime={1000}
                onChange={(e) => handleSlideChange(e)}
                >
                    {slideArr}
                </Carousel>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        games: state.games.new
    }
}

const MemoHero = React.memo(Hero, (prevProps, nextProps) => {
    if (prevProps.games) {
        return false
    }
    return true
})

export default connect(mapStateToProps, mapDispatchToProps)(MemoHero)
