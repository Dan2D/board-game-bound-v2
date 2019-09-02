import React from 'react';
import { connect } from 'react-redux';

import GameMin from "../GameMin/GameMin";

// Destructure props
function List(props) {
    if (props.isLoading) {
        return <div>LOADING</div>
    }
// Add logic later to determine how many games to render
    const gameArray = [];
    const NUM_LIST_ITEMS = 15;
    const PG = props.listType === "summary" ? 0 : props.games.pg;
    const listStart = PG * NUM_LIST_ITEMS;
    const listEnd = props.listType === "summary" ? 5 : listStart + NUM_LIST_ITEMS;
    
    for (let i = listStart; i < listEnd; i++){
        gameArray.push(
            <GameMin  
            key={props.games[i].id}
            id={props.games[i].id}
            rank={i + 1} 
            gameCover={props.games[i].images.small} 
            name={props.games[i].name}
            yearPub={props.games[i].year_published} 
            publisher={props.games[i].primary_publisher}
            rating={props.games[i].average_user_rating} 
            numReview={props.games[i].num_user_ratings}
            minPlayers={props.games[i].min_players}
            maxPlayers={props.games[i].max_players}
            minTime={props.games[i].min_playtime}
            maxTime={props.games[i].max_playtime}
            age={props.games[i].min_age}
            msrp={props.games[i].msrp}
            price={props.games[i].price}
            discount={props.games[i].discount}
            />
        )
    }


    return (
        <div>
            <h2>{props.listTitle.toUpperCase()}</h2>
            <ul>
                {gameArray}
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        games: state.games[ownProps.gameType].list,
        isLoading: state.games[ownProps.gameType].isLoading
    }
}

export default connect(mapStateToProps)(List);
