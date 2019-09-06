import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from "./Checkbox";
import {filterTypes} from "../../constants/filterTypes";

function FilterList(props) {

   let filterArr = Object.keys(filterTypes[props.filter]).map(filter => {
       if (filter === "time"){

       }
       let filterObj = filterTypes[props.filter][filter];
       return (
            <Checkbox key={filter} name={props.filter} filter={filterObj.name} filterName={filter} onChange={(e, checked) => props.onChange(e, checked)}/>
     )
    
   });

    return (
        <div className="filter-list-container">
            <p><strong>{props.title}</strong></p>
            <div className="filter-list">
                {filterArr}
            </div>
        </div>
    )
}

FilterList.propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired
}

export default FilterList
