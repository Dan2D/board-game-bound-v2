import React from 'react';
import PropTypes from 'prop-types';

function PriceLnk(props) {
    return (
        <div className="buy-lnk">
                <p>{`Store: ${props.store}`}</p>
                <p>{`Price: ${props.price}`}</p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a>
            </div> 
    )
}

PriceLnk.propTypes = {
    store: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string
}

export default PriceLnk
