import React from 'react';
import Accordian from "../Accordian/Accordian";

function GamePrice(props) {
    return (
        <div className={`price-container price-container--${props.type}`}>
            {props.discount && <p><strong>$</strong>{props.price}</p>}
            {props.msrp !== "0.00" && <p className={"info-block__msrp" + (props.discount ? "--strike" : "")}>MSRP <strong>$</strong>{props.msrp}</p>}
            {props.type === "detail" && <Accordian class={props.type} content={props.buyLnks} type="price" title="Buy Links"/>}
        </div>
    )
}

export default GamePrice
