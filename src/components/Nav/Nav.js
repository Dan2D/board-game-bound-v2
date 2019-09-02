import React from 'react';
import SearchBar from "../Searchbar/Searchbar";

function Nav(props) {
    // ADD LINK LATER REDIRECTS TO HOME
    // MAKE PNG IMAGE COMBINES BGB WITH ICON
    return (
        <div className="nav-container">
            <img className="nav__logo" src={require("../../Images/site-logo.png")} alt="board game bound logo" />
            <SearchBar />
        </div>
    )
}

export default Nav
