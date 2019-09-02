import React from 'react';

function GameIcon(props) {
    let min = props.min ? props.min : null;
    let max = props.max ? props.max : null;
    let dash = min && max ? "-" : null;
    let iconRange = min === max ? min : min + dash + max;

    return (
        <div className={`icon-set icon-set--${props.type}`}>
            <img src={require(`../../Images/${props.type}-icon.png`)} alt={`${props.type} icon`} />
            <span>{(props.type === "age" ? "+" : "") + iconRange}</span>
        </div>
    )
}

export default GameIcon;
