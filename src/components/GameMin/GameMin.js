import React from 'react';
import PropTypes from 'prop-types';
import Rating from "../Rating/Rating";
import GameIcon from "../GameIcon/GameIcon";
import GamePrice from "../GamePrice/GamePrice";

function GameMin(props) {
    const price = parseFloat(props.discount) < 0 ? props.msrp : props.price;
    return (
        <li className={`list-item list-item--${props.type} ${props.gameType === "deal" ? "list-item--deal" : ""}`}>
        <div className={`list-item__game-block list-item--${props.type}__game-block`}>
        {props.gameType !== "deal" && <span className={`game-block__rank ${props.gameType === "deal" ? "game-block--deal__rank" : ""}`}>#{props.rank}</span>}
        {props.gameType === "deal" && (<>
            <span className={`game-block__discount`}>{props.discount.substring(2)}%</span>
            <GamePrice type="deal" msrp={props.msrp} price={props.price} discount={props.discount} />
        </>)}
        <img className={`game-block__game-image game-block--${props.type}__game-image`} src={props.gameCover} alt={`${props.name} board game cover`} />
        </div>
        <div className={`list-item__info-block list-item--${props.type}__info-block`}>
            <div className={`info-block--top info-block--${props.type}--top`}>
                <div className={`info-block__main info-block--${props.type}__main`}>
                    <h5 className={`info-block__title info-block--${props.type}__title`}>{props.name}</h5>
                    <p className={`info-block__pub-year info-block--${props.type}__pub-year`}>{props.yearPub}</p>
                    <h2 className={`info-block__publisher info-block--${props.type}__publisher`}><strong>Publisher</strong>: {props.publisher}</h2>
                </div>
                <Rating rating={props.rating} type={props.type} numReviews={props.numReviews} />
            </div>
                
            <div className={`info-block--bottom info-block--${props.type}--bottom`}>
                <div className={`info-block__game-icons info-block--${props.type}__game-icons`}>
                    <GameIcon min={props.minPlayers} max={props.maxPlayers} type="player" />
                    <GameIcon min={props.minTime} max={props.maxTime} type="time" />
                </div>
                <GamePrice type={props.type} msrp={props.msrp} price={price} discount={props.discount} />
            </div>
        </div>
    </li>
    )
}

GameMin.propTypes = {
    id: PropTypes.string,
    rank: PropTypes.number,
    type: PropTypes.string,
    gameType: PropTypes.string,
    gameCover: PropTypes.string,
    name: PropTypes.string,
    yearPub: PropTypes.string,
    rating: PropTypes.string,
    numReviews: PropTypes.number,
    minPlayers: PropTypes.number,
    maxPlayers: PropTypes.number,
    minTime: PropTypes.number,
    maxTime: PropTypes.number,
    age: PropTypes.number,
    msrp: PropTypes.string,
    price: PropTypes.string,
    discount: PropTypes.string
}

export default GameMin
