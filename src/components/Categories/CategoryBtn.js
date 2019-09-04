import React from 'react'
import {Link} from "react-router-dom";

function CategoryBtn(props) {
    return (
        <Link to={`/category?name=${props.categoryId}&type=category`}>
            <button className="category-btn">
                {props.btnText}
            </button>
        </Link>
    )
}

export default CategoryBtn
