import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function CategoryBtn(props) {
    return (
        <Link to={`/search?name=${props.btnText}&type=category`}>
            <button className="category-btn">
                {props.btnText}
            </button>
        </Link>
    )
}

CategoryBtn.propTypes = {
    btnText: PropTypes.string.isRequired,
}

export default CategoryBtn
