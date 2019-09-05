import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <div>
                    <h2 className="footer-title footer-title--left">BOARD-GAME-BOUND</h2>
                    <Link className="footer__lnk" to="/">HOME</Link>
                    <Link className="footer__lnk" to="/search?query=all">DISCOVER</Link>
                </div>
                <div className="footer__creator-info">
                    <p>Created By Dan Schultz</p>
                    <p>Portfolio: <a href="https://www.danschultz.dev/" target="_blank" rel="noopener noreferrer">https://www.danschultz.dev/</a></p>
                    <p>Copyright &copy;2019</p>
                </div>
            </div>
            <div className="footer-right">
                <h4 className="footer-title footer-title--right"><strong>Powered By</strong></h4>
                <img className="footer__logo" src={require("../../Images/bgg-logo.png")} alt="board game geek logo" />
                <div>
                    <img className="footer__logo" src={require("../../Images/bga-logo.png")} alt="board game atlas logo" />
                    <span className="footer__logo-title">Board Game Atlas</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
