import React from 'react'

function PriceLnk(props) {
    return (
        <div className="buy-lnk">
                <p>{`Store: ${props.store}`}</p>
                <p>{`Price: ${props.price}`}</p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a>
            </div> 
    )
}

export default PriceLnk
