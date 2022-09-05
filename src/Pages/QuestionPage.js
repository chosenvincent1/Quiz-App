import React, { useState } from "react";
import Question from "./Question";
import data from '../Components/Data'

function QuestionPage(props) {


    const questions = data.map((item, index) => {
        return <Question key={index} eachQuestion={item}
                    setCorrectAnswers={props.setCorrectAnswers} 
                    correctAnswers={props.correctAnswers} 
                    allCorrectAnswers={props.allCorrectAnswers} 
                    setAllCorrectAnswers={props.setAllCorrectAnswers}
                    index={index}
                />
    })

    return(
        <div>
            {questions}

            <div className="submit-btn-container">
                <button className="submit-btn" 
                    onClick={() => props.setCurrentPage('submit')}
                    >Check Answer</button>
            </div>
        </div>
    )
}

export default QuestionPage