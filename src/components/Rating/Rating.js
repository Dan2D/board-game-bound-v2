import React from 'react';
import PropTypes from 'prop-types';


function Rating(props) {
    let color;
    let rating = props.rating ? props.rating.toFixed(1) : "?";
    if (props.rating) {
        switch(true){
            case props.rating.toFixed(1) > 4:
                color = "rgb(176, 181, 46)";
                break
            case props.rating.toFixed(1) > 3:
                color = "rgb(48, 123, 71)";
                break
            case props.rating.toFixed(1) > 2:
                color = "rgb(36, 102, 108)";
                break
            case props.rating.toFixed(1) > 1:
                color = "rgb(19, 70, 96)";
                break
            case props.rating.toFixed(1) > 0:
                color = "rgb(19, 70, 96)";
                break
            default:
                color = 'rgb(94, 106, 115)';
        }
    }
  else {color = 'rgb(94, 106, 115)'}

    return (
        <div 
        className={`rating rating--${props.type} ${rating === "" ? "rating--none" : ""}`}  
        style={{background: color, borderColor: color}}>
            <strong>{rating} <span className="rating--total">/ 5.0</span></strong>
             <p className="rating__reviews">({props.numReviews} Reviews)</p>
        </div>
    )
}

Rating.propTypes = {
    type: PropTypes.string,
    rating: PropTypes.number,
    numReviews: PropTypes.number
}

export default Rating
