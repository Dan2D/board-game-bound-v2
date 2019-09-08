import React from 'react';
import PropTypes from 'prop-types';

function DetailLoader(props) {
    if (!props.loading) {
        let loader;
        setTimeout(() => {
            loader = document.getElementById("loader");
            loader.style.transition = "opacity ease-in 3000ms";
            loader.style.opacity = "0";
        }, 1000);
        
    }
    return (
        <div className="loader-container" id="loader">
            <img className="loading-icon" src={require("../../Images/dice-1.png")} alt="dice 1" />
            <img className="loading-icon" src={require("../../Images/dice-2.png")} alt="dice 2" />
            <img className="loading-icon" src={require("../../Images/dice-3.png")} alt="dice 3" />
            <img className="loading-icon" src={require("../../Images/dice-4.png")} alt="dice 4" />
            <img className="loading-icon" src={require("../../Images/dice-5.png")} alt="dice 5" />
            <img className="loading-icon" src={require("../../Images/dice-6.png")} alt="dice 6" />
        </div>
    )
}

DetailLoader.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default DetailLoader
