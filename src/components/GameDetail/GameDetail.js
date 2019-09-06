import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';
import {getGameDetail} from "../../actions/gamesActions";

import NotFound from "../NotFound/NotFound";
import Rating from "../Rating/Rating";
import GameIcon from "../GameIcon/GameIcon";
import Description from "./Description";
import MakerBlock from "./MakerBlock";
import GamePrice from "../GamePrice/GamePrice";


const mapDispatchToProps = dispatch => {
    return {
        getGameDetail: (name, year) => {
            dispatch(getGameDetail(name, year))
        }
    }
}


function GameDetail(props) {
    const {getGameDetail} = props;
    const GAME = props.detail.game;
    const ERROR = props.detail.error;
    const LOADING = props.detail.isLoading;
    const BUY_INFO = props.detail.purchaseInfo;
    const COVER = props.detail.cover;
    const BG = props.detail.bg;

    useEffect(() => {
        let searchParams = queryString.parse(props.location.search);
        getGameDetail(searchParams.name, searchParams.year);
    }, [getGameDetail, props.location]);

    if (LOADING) {
        return <div>GAME LOADING</div>
    }
    if (ERROR !== null) {
        console.log(ERROR)
        return <NotFound />
    }
    return (
        <div className="detail-game-block">
            <img className="detail-game-block__bg" style={{backgroundImage: `url("${BG}")`}} src={require("../../Images/bg-overlay.png")} alt="board game cover" />
            <Rating type="detail" rating={GAME.average_user_rating} numReviews={GAME.num_user_ratings}/>
            <div className="detail-game-block--layout">
                <div className="detail-game-block__title-container">
                    <h3 className="detail-game-block__title">{GAME.name.toUpperCase()}</h3>
                    <p className="detail-game-block__year">{GAME.year_published}</p>
                </div>
                <div className="detail-game-block__game-container">
                    <img className="detail-game-block__cover" src={COVER ? COVER : GAME.image_url} alt={GAME.name} />
                    <div className="detail-game-block__icon-set">
                        <GameIcon min={GAME.min_players} max={GAME.max_players} type="player" />
                        <GameIcon min={GAME.min_playtime} max={GAME.max_playtime} type="time" />
                        <GameIcon min={GAME.min_age} type="age" />
                    </div>
                </div>
                <Description dscrpt={GAME.description} url={GAME.official_url ? GAME.official_url  : GAME.url} rules={GAME.rules_url}/>
                <MakerBlock designers={GAME.designers} artists={GAME.artists} publisher={GAME.primary_publisher}/>
                <GamePrice type="detail" msrp={GAME.msrp} price={GAME.price} discount={GAME.discount} buyLnks={BUY_INFO}/>
                
            </div>
        </div>
    )
}

GameDetail.propTypes = {
    detail: PropTypes.shape({
        game: PropTypes.object,
        bg: PropTypes.string,
        cover: PropTypes.string,
        error: PropTypes.string,
        isLoading: PropTypes.string,
        purchaseInfo: PropTypes.array
    })
}

const mapStateToProps = state => {
    return {
        detail: state.games.detail,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);
