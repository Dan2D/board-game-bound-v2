import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {newPage} from "../../actions/gamesActions";

const mapDispatchToProps = dispatch => {
    return {
        newPage: pg => {
            dispatch(newPage(pg));
        }
    }
}

function Pagination(props) {
    const {newPage} = props;
   let pgArr = [];
    const NUM_OF_PGS = Math.ceil(props.listLength / 15);

   function handlePgClick(e, i) {
       document.querySelectorAll(".list__pg-btn").forEach(btn => btn.classList.remove("active"))
       window.scrollTo(0,0);
       (e.target).classList.add("active");
        newPage(i);
   }
   for (let i = 0; i < NUM_OF_PGS; i++){
    pgArr.push(<button key={`page-${i}`} className={`list__pg-btn ${i === 0 ? "active" : ""}`}  onClick={(e) => handlePgClick(e, i)}>{i + 1}</button>)
   }

    return (
        <div className="pagination-container">
            {pgArr}
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Pagination);
