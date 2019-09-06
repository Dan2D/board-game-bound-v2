import React from 'react';
import PropTypes from 'prop-types';

function GameIcon(props) {
    let min = props.min ? props.min : "";
    let max = props.max ? props.max : "";
    let dash = min && max ? "-" : "";
    let iconRange = min === max ? min : min + dash + max;

    return (
        <div className={`icon-set icon-set--${props.type}`}>
            <img className={min === "" && min === max ? "icon-set--none" : ""} src={require(`../../Images/${props.type}-icon.png`)} alt={`${props.type} icon`}/>
            <span>{(props.type === "age"  && min !== "" ? "+" : "") + iconRange}</span>
        </div>
    )
}

GameIcon.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    type: PropTypes.string
}

export default GameIcon;
