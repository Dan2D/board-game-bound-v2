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

    // function handleSearchSubmit(e) {
    //     e.preventDefault();
    //     console.log(e.target)
    //     e.target.click();
    
    // }   

    return (
        <div>
            <input className="searchbar__input" type="text" value={input} placeholder="Search..." onKeyDown={checkInput} onChange={handleSearchInput}/>
            <Link to={`/search?name=${input}&type=query`} className="searchbar__lnk" >Search</Link>
        </div>
    )
}

export default Searchbar
