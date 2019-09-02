import React, {useState} from 'react'

function Searchbar(props) {
    const [input, setInput] = useState('Search...')

    function handleSearchInput(e) {

    }

    function handleSearchSubmit() {

    }
// Change button to link later
    return (
        <div>
            <input className="searchbar__input" type="text" value={input} onChange={handleSearchInput}/>
            <button className="searchbar__lnk" onClick={handleSearchSubmit}>Search</button>
        </div>
    )
}

export default Searchbar
