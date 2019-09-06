import React, {useEffect} from 'react';
import { connect } from 'react-redux'


function Loader(props) {
    const bitInterval = setInterval(() => {loaderAnimation();}, 700);
    let index = 0;
    let bits;
    const x = new Image();
    x.src = require("../../Images/trail-x.png");
    x.classList.add = "trail trail-x";
    x.alt = "trail marker";

    useEffect(() => {
        return () => {
            clearInterval(bitInterval)
        }
    }, [bitInterval])

    console.log("LOADING")

    setTimeout(() => {
        bits = document.querySelectorAll(".trail-bit-container");}, 200); 

    setTimeout(() => {
        document.querySelector(".loader-container").style.transition = "opacity 2s";
        document.querySelector(".loader-container").style.opacity = "0";
        setTimeout(() => {
            document.querySelector(".loader-container").remove();
        }, 2000)}, 6000);

    function loaderAnimation() {
        if (index >= 7) {
            bits[index].style.animation = "ani-x 700ms ease-in forwards";
            clearInterval(bitInterval);
        }
        bits[index].style.animation = "ani-bit 250ms ease-in forwards";
        index++;
    }

    return (
        <div className="loader-container" id="test">
            <h2 style={{position: "absolute", width: "300px", textAlign: "center", top: "15px", left: "0", right: "0", margin: "auto"}}>BOARD-GAME-BOUND</h2>
            <div className="trail-bit-container" style={{top: "90%", left: "5%", transform: "rotate(20deg)"}}>
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "90%", left: "5%", transform: "rotate(20deg)"}}/>
            </div>
            <div className="trail-bit-container" style={{top: "80%", left: "20%", transform: "rotate(30deg)"}}>
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "80%", left: "20%", transform: "rotate(30deg)"}}/>
            </div>
            <div className="trail-bit-container" style={{top: "70%", left: "33%", transform: "rotate(0deg)"}}>
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "70%", left: "33%", transform: "rotate(0deg)"}}/>
            </div>  
            <div className="trail-bit-container" style={{top: "55%", left: "35%", transform: "rotate(-50deg)"}}>  
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "55%", left: "35%", transform: "rotate(-50deg)"}}/>
            </div>  
                <div className="trail-bit-container" style={{top: "45%", left: "25%", transform: "rotate(-100deg)"}}>     
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "45%", left: "25%", transform: "rotate(-100deg)"}}/>
            </div> 
            <div className="trail-bit-container" style={{top: "35%", left: "13%", transform: "rotate(-65deg)"}}>    
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "35%", left: "13%", transform: "rotate(-65deg)"}}/>
            </div>  
            <div className="trail-bit-container" style={{top: "20%", left: "15%", transform: "rotate(13deg)"}}>  
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "20%", left: "15%", transform: "rotate(13deg)"}}/>
            </div>   
            <div className="trail-bit-container" style={{top: "15%", left: "29%", transform: "rotate(60deg)"}}>    
            <img className="trail trail-x" src={require("../../Images/trail-x.png")} alt="trail dash" style={{top: "15%", left: "29%", transform: "rotate(60deg)"}}/>
            </div> 
            <div className="trail-bit-container" style={{top: "21%", left: "42%", transform: "rotate(97deg)"}}>    
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "21%", left: "42%", transform: "rotate(97deg)"}}/>
            </div> 
            <div className="trail-bit-container" style={{top: "35%", left: "51%", transform: "rotate(120deg)"}}>     
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "35%", left: "51%", transform: "rotate(120deg)"}}/>
            </div> 
            <div className="trail-bit-container" style={{top: "50%", left: "59%", transform: "rotate(110deg)"}}>    
                <img className="trail trail-bit" src={require("../../Images/trail-bit.png")} alt="trail dash" style={{top: "50%", left: "59%", transform: "rotate(110deg)"}}/>
            </div>
            <div className="trail-bit-container" style={{top: "63%", left: "69%", transform: "rotate(36deg)"}}>    
                <img className="trail trail-x" src={require("../../Images/trail-x.png")} alt="trail dash" style={{top: "61%", left: "69%", transform: "rotate(36deg)"}}/>
            </div>      
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     if (ownProps.page === "home") {
//         return {
//             // loading: [state.games.new.isLoading, state.games.top.isLoading, state.games.trending.isLoading]
//         }
//     }
//     return {
//     //    loading: [state.games[ownProps.loading].isLoading]
//     }
// }

// const MemoLoader = React.memo(Loader, (prevProps, nextProps) => {
//     if (prevProps.loading.every(item => item === false)){
//         return true
//     }
//     return false
// })

export default connect(null)(Loader)
