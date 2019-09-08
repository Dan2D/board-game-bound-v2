import React from 'react'

function NotFound() {
    return (
        <div className="not-found">
            <img className="not-found__img" src={require("../../Images/not-found.svg")} alt="404 page"/>
            <p className="not-found__msg">Sorry! We Couldn't Find What You're Looking For...</p>
        </div>
    )
}

export default NotFound
