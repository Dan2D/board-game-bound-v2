import React from 'react'

function MakerBlock(props) {
    const designers = props.designers.length > 0 ? props.designers.join(", ") : "No Designers Found...";
    const artists = props.artists.length > 0 ? props.artists.join(", ") : "No Artists Found...";
    const publisher = props.publisher ? props.publisher : "No Publisher Found...";
    function checkSngl(text){
        if (props[text].length > 1){
            return text[0].toUpperCase().concat(text.slice(1)) + ": ";
        }
        return text[0].toUpperCase().concat(text.slice(1, text.length - 1)) + ": ";
    }
    return (
        <div className="maker-container">
            <h2 className="detail-game-block__maker-title"><strong>MAKERS</strong></h2>
            <p className="detail-game-block__maker-text"><strong>{checkSngl("designers")}</strong>{designers}</p>
            <p className="detail-game-block__maker-text"><strong>{checkSngl("artists")}</strong>{artists}</p>
            <p className="detail-game-block__maker-text"><strong>Publisher: </strong>{publisher}</p>
        </div>
    )
}

export default MakerBlock
