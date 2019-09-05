import React from 'react';
import PropTpyes from 'prop-types';
import { connect } from 'react-redux';
import {sortGames} from "../../actions/gamesActions";

const mapDispatchToProps = dispatch => {
    return {
        sortGames: (sort, flow) => {
            dispatch(sortGames(sort, flow));
        }
    }
};

const sortIcon = require("../../Images/arrow-icon.png");

function Sort(props) {
    const {sortGames} = props;
    function handleSort(select){
        let option = document.querySelector(`option[data-value="${select.target.value}"]`);
        let sort = option.attributes["sort"].value;
        let flow = option.attributes["flow"].value;
        sortGames(sort, flow);
    }
    
    return (
        <div className="sort-container" id="sort-container">
           <select className="sort-container__select" onChange={handleSort} style={{backgroundImage: `url(${sortIcon})` }}>
               <option className="sort-container__option" value="Relavence" data-value="Relavence" sort="none" flow="none" onClick={(e) => handleSort(e)}>Relavence</option>
               <option className="sort-container__option" value="Latest" data-value="Latest" sort="year_published" flow="high" >Latest</option>
               <option className="sort-container__option"  value="Rating" data-value="Rating" sort="average_user_rating" flow="high" onClick={(e) => handleSort(e)}>Rating</option>
               <option className="sort-container__option"  value="Lowest Price"  data-value="Lowest Price" sort="price" flow="low" onClick={(e) => handleSort(e)}>Lowest Price</option>
               <option className="sort-container__option"  value="A-Z" data-value="A-Z" sort="name" flow="high" onClick={(e) => handleSort(e)}>A - Z</option>
               <option className="sort-container__option" value="Z-A" data-value="Z-A" sort="name" flow="low" onClick={(e) => handleSort(e)}>Z - A</option>
           </select>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Sort)