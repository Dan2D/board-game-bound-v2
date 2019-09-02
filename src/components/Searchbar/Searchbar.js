import React, {useState} from 'react'

function Searchbar(props) {
    const [input, setInput] = useState('Search...')

    function handleSearchInput(e) {

    }

    function handleSearchSubmit() {

    }

    return (
        <div>
            <input type="text" value={input} onChange={handleSearchInput}/>
            <button onClick={handleSearchSubmit}>Search</button>
        </div>
    )
}

export default Searchbar
