import React from 'react'
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

export default CategoryBtn
