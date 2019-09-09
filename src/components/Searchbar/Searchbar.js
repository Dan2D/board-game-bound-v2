import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Searchbar(props) {
    const [input, setInput] = useState("");

    function handleSearchInput(e) {
        let text = e.target.value;
        setInput(text);
    }

    function checkInput (e) {
        if (e.keyCode === 13) {
            let searchLnk = document.querySelector('.searchbar__lnk');
            searchLnk.click();
        }
    }

    return (
        <div className="searchbar-container">
            <input className="searchbar__input" type="text" value={input} aria-label="Search Input" placeholder="Search..." onKeyDown={checkInput} onChange={handleSearchInput}/>
            <Link to={`/search?name=${input}&type=query`} className="searchbar__lnk" onClick={() => setInput("")}>Search</Link>
        </div>
    )
}

export default Searchbar
