import React from 'react';
import { connect } from 'react-redux'

import Accordian from "../Accordian/Accordian";
import CategoryBtn from "./CategoryBtn"


function Categories(props) {
    const CATEGORIES = props.categories.list;
    const LOADING = props.categories.isLoading;

    if (LOADING) return <div></div>

    const categoryBtnArr = Object.keys(CATEGORIES).map((category, indx) => {
        return (
            <CategoryBtn 
            key={category + indx} 
            btnText={category} 
            categoryId={CATEGORIES[category]}
            />
            )
        });

    return (
        <div className="category-container">
            <Accordian  content={CATEGORIES} title="CATEGORIES" class="category" />
            <h4 className="category__title">CATEGORIES</h4>
            <div className="category-container--btns">
                    {categoryBtnArr}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Categories)
