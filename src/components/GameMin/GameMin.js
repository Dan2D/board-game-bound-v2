import React from 'react';
import Rating from "../Rating/Rating";
import GameIcon from "../GameIcon/GameIcon";
import GamePrice from "../GamePrice/GamePrice";

function GameMin(props) {
    return (
        <li className="list-item">
        <div className="list-item__game-block">
        <span className="game-block__rank">{props.rank}</span>
        <img className="game-block__game-image" src={props.gameCover} alt={`${props.name} board game cover`} />
        </div>
        <div className="list-item__info-block">
            <div className="info-block--top">
                <div className="info-block__main">
                    <h5 className="info-block__title">{props.name}</h5>
                    <p className="info-block__pub-year">{props.yearPub}</p>
                    <h2 className="info-block__publisher"><strong>Publisher</strong>: {props.publisher}</h2>
                </div>
                <Rating rating={props.rating} type="summary" numReviews={props.numReviews} />
            </div>
                
            <div className="info-block--bottom">
                <div className="info-block__game-icons">
                    <GameIcon min={props.minPlayers} max={props.maxPlayers} type="player" />
                    <GameIcon min={props.minTime} max={props.maxTime} type="time" />
                </div>
                <GamePrice msrp={props.msrp} price={props.price} discount={props.discount} />
            </div>
        </div>
    </li>
    )
}

export default GameMin
