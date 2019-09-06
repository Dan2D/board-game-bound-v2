import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import SearchBar from "../Searchbar/Searchbar";

function Nav(props) {
   function handleLogoClick(e) {
       e.preventDefault();
       if (props.content !== "home") {
        return e.target.parentElement.click();
       }
       return
   }

    return (
        <div className="nav-container">
            <Link to="/" >
            <img className="nav__logo" onClick={handleLogoClick} src={require("../../Images/site-logo.png")} alt="board game bound logo" />
            </Link>
            <SearchBar />
        </div>
    )
}

Nav.propTypes = {
    content: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        content: state.games.content
    }
}

export default connect(mapStateToProps)(Nav)
