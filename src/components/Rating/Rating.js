import React from 'react';


function Rating(props) {
    let color;
    let rating = props.rating ? props.rating.toFixed(1) : "";
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
            color = 'blue';
    }

  

    return (
        <div 
        className={`rating rating--${props.type} ${rating === "" ? "rating--none" : ""}`}  
        style={{background: color, borderColor: color}}>
            <strong>{rating}</strong>
            {props.type === "detail" && <span className="rating__reviews">{props.numReviews}</span>}
        </div>
    )
}

export default Rating
