import React from 'react';
import PropTypes from 'prop-types';


function Rating(props) {
    let color;
    let rating = props.rating ? props.rating.toFixed(1) : "?";
    if (props.rating) {
        switch(props.rating.toFixed(0)){
            case "0":
            case "1": 
                color = "#007360";
                break
            case "2":
                color = "#007951";
                break
            case "3":
                color = "#56A500";
                break
            case "4":
                color = "#AEB500";
                break
            case "5":
                color = "#B6B200";
                break
            default:
                color = '#5f829c ';
        }
    }
  else {color = '#5f829c '}

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
