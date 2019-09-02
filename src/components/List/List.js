import React from 'react';
import { connect } from 'react-redux';

import GameMin from "../GameMin/GameMin";



// Destructure props
function List(props) {

// Add logic later to determine how many games to render
    const gameArray = props.games.map((game, index) => {
        return (
                <GameMin  
                key={game.id}
                id={game.id}
                rank={index} 
                gameCover={game.images.small} 
                name={game.name}
                yearPub={game.year_published} 
                publisher={game.primary_publisher}
                rating={game.average_user_rating} 
                numReview={game.num_user_ratings}
                minPlayers={game.min_players}
                maxPlayers={game.max_players}
                minTime={game.min_playtime}
                maxTime={game.max_playtime}
                age={game.min_age}
                msrp={game.msrp}
                price={game.price}
                discount={game.discount}
                />
        )
    })
    const content = (
        <div>
            <h2>{props.listTitle.toUpperCase()}</h2>
            <ul>
                {gameArray}
            </ul>
        </div>
    )
    const loading = <div>LOADING</div>

    return (
        props.isLoading ? loading : content
    )
}

const mapStateToProps = state => {
    return {
        games: state.default.games,
        isLoading: state.default.isLoading
    }
}

export default connect(mapStateToProps)(List);
