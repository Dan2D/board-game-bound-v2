import React from 'react';
import parse from 'react-html-parser';



function Description(props) {
    let dscrpt = props.dscrpt.length > 0 ? parse(props.dscrpt) : "No Description Found..."
    return (
        <div className="description-container">
            <p className="detail-game-block__dscrpt-title"><strong>Description</strong></p>
            <p className="detail-game-block__dscrpt-body" id="description" >{dscrpt}</p>
            <div className="detail-game-block__site-url">
                {props.url && <>
                    <p><strong>Website:</strong></p>
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        {props.url}
                    </a>
                </>
                }
                {props.rules && 
                <>
                    <p><strong>Rules:</strong></p>
                    <a href={props.rules} target="_blank" rel="noopener noreferrer">
                        {props.rules}
                    </a>
                </>}
            </div>
        </div>
    )
}

export default Description
