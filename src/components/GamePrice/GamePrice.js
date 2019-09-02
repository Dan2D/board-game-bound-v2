import React from 'react';

function GamePrice(props) {
    return (
        <div className="info-block__price">
            {props.discount && <p><strong>$</strong>{props.price}</p>}
            <p className={"info-block__msrp" + (props.discount ? "--strike" : "")}>MSRP <strong>$</strong>{props.msrp}</p>
        </div>
    )
}

export default GamePrice
