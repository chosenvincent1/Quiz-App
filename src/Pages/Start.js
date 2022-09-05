import React from "react";

const Start = ({setCurrentPage})=> {
    return(
        <div className="start-container">
            <h1 className="start-header">Quizzical</h1>
            <h4 className="start-text">Some description if needed</h4>
            <button className="start-btn" onClick={() => setCurrentPage('question')}>Start Quiz</button>
        </div>
    )
}

export default Start