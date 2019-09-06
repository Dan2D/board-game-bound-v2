import React, {useState} from 'react';
import PropTypes from 'prop-types';

import PriceLnk from "../GamePrice/PriceLnk";
import CategoryBtn from "../Categories/CategoryBtn";
function Accordian(props) {
    const [toggle, setToggle] = useState(false);
    const CONTENT = props.content;

    function genItemArr (content, type) {
        if (type === "price"){
            return content.map(item => {
                return <PriceLnk key={item.store_name} store={item.store_name} price={item.price_text} url={item.url} />
            })
        }
        return Object.keys(content).map(item => {
            return <CategoryBtn key={content[item]} btnText={item} categoryId={content[item]} />
        })
        
    }

    return (
        <div className={`accordian-container accordian--${toggle ? "open" : "closed"} accordian--${props.class}`}>
            <button className={`accordian`} onClick={() => setToggle(!toggle)}>{props.title}<img src={require("../../Images/arrow-icon.png")} alt="arrow"/></button>

            <div className={`accordian-container--${props.class}`}>
                {genItemArr(CONTENT, props.type)}
            </div>
        </div>
    )
}

Accordian.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
    title: PropTypes.string,
    class: PropTypes.string
}

export default Accordian
