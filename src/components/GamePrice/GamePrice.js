import React from 'react';
import PropTypes from 'prop-types';
import Accordian from "../Accordian/Accordian";

function GamePrice(props) {

    function checkPositiveDiscount (discount) {
        if (parseFloat(discount) > 0) {
            return true;
        }
        return false;
    }

    return (
        <div className={`price-container price-container--${props.type}`}>
            {checkPositiveDiscount(props.discount) && <p><strong>$</strong>{props.price}</p>}
            {props.msrp !== "0.00" && <p className={"info-block__msrp" + (checkPositiveDiscount(props.discount) ? "--strike" : "")}>MSRP <strong>$</strong>{props.msrp}</p>}
            {props.type === "detail" && <Accordian class={props.type} content={props.buyLnks} type="price" title="Buy Links"/>}
        </div>
    )
}

GamePrice.propTypes = {
    msrp: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string,
    discount: PropTypes.string,
    buyLnks: PropTypes.arrayOf(PropTypes.object)
}

export default GamePrice
