import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    const [toggleCheckbox, setToggleCheckbox] = useState(false);

    function handleCheckboxChange(e){
        setToggleCheckbox(!toggleCheckbox);
        return props.onChange(e, !toggleCheckbox);
    }

    return (
        <div className="checkbox-label">
    <input 
    className="checkbox-input"
    type="checkbox" 
    data-name={props.name}
    data-filter={props.filter}
    value={toggleCheckbox}
    onChange={(e) => handleCheckboxChange(e)}
    />
    <span className="checkbox-custom">{props.filterName}</span>
    </div>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string,
    filter: PropTypes.string,
    filterName: PropTypes.string
}

export default Checkbox
