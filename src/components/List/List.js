import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Sort from "../Sort/Sort";
import GameMin from "../GameMin/GameMin";
import Pagination from "./Pagination";

function List(props) {
    const gameArray = [];
    const GAMES = props.gameType === "search" ? props.games.modList : props.games.list;
    const LOADING = props.games.isLoading;
    
    if (LOADING) {
        return <></>
    }

    const PG = props.listType === "summary" ? 0 : props.games.pg;
    const NUM_LIST_ITEMS = GAMES.length - (PG * 15) >= 15 ? 15 : GAMES.length - (PG * 15);
    const listStart = PG * 15;
    const listEnd = props.gameType === "deal" ? 5: props.listType === "summary" ? 12 : listStart + NUM_LIST_ITEMS;

    for (let i = listStart; i < listEnd; i++){
        gameArray.push(
            <Link key={GAMES[i].id} to={`/games?name=${GAMES[i].name}&year=${GAMES[i].year_published}`}>
                <GameMin  
                id={GAMES[i].id}
                rank={i + 1} 
                type={props.listType}
                gameType={props.gameType}
                gameCover={GAMES[i].images.small} 
                name={GAMES[i].name}
                yearPub={GAMES[i].year_published} 
                publisher={GAMES[i].primary_publisher}
                rating={GAMES[i].average_user_rating} 
                numReviews={GAMES[i].num_user_ratings}
                minPlayers={GAMES[i].min_players}
                maxPlayers={GAMES[i].max_players}
                minTime={GAMES[i].min_playtime}
                maxTime={GAMES[i].max_playtime}
                age={GAMES[i].min_age}
                msrp={GAMES[i].msrp}
                price={GAMES[i].price}
                discount={GAMES[i].discount}
                />
            </Link>
        )
    }


    return (
        <div className={`list-${props.listType}-container ${props.gameType === "deal" ? "list-deal-container" : ""}`}>
            {props.listType === "summary" && <h2 className={`list-${props.listType}__title`}>{props.listTitle.toUpperCase()}</h2>}
            {props.listType === "full" && <Sort />}
            <ul className={`list-inner-container list-inner-container--${props.listType}`}>
                {gameArray}
                {props.listType === "summary" && <Link className={`list-${props.listType}__lnk`} to={`/search?type=${props.gameType}`}>More Games...</Link>}
                {props.listType === "full" && <Pagination listLength={GAMES.length} />}
            </ul>
        </div>
    )
}

List.propTypes = {
    games: PropTypes.object.isRequired,
    listType: PropTypes.string,
    gameType: PropTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        games: state.games[ownProps.gameType]
    }
}

export default connect(mapStateToProps)(List);
