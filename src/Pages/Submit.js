import React from "react";

const Submit = (props)=> {


    const highlightCorrectAnswers = {
        backgroundColor:'green',
        color: 'white'
    }

    console.log(props.allCorrectAnswers)

    return(
        <div className="question-page">
            <div className="question-answer-container">
                <h4 className="question">{props.eachQuestion.question}</h4>

                <div className="answer-container">
                    <button
                    style={(props.eachQuestion.options[0] == props.eachQuestion.answer) ? highlightCorrectAnswers : {}}
                    value={props.eachQuestion.options[0]}
                        className={props.allCorrectAnswers[props.index+5] == props.eachQuestion.options[0] ? 'wrong-answer': 'answer'}>{props.eachQuestion.options[0]}</button>
                    
                    <button 
                    style={(props.eachQuestion.options[1] == props.eachQuestion.answer) ? highlightCorrectAnswers : {}}
                        value={props.eachQuestion.options[1]}
                        className={props.allCorrectAnswers[props.index+5] == props.eachQuestion.options[1] ? 'wrong-answer': 'answer'}>{props.eachQuestion.options[1]}</button>
                    
                    <button
                        style={(props.eachQuestion.options[2] == props.eachQuestion.answer) ? highlightCorrectAnswers : {}}
                        value={props.eachQuestion.options[2]}
                        className={props.allCorrectAnswers[props.index+5] == props.eachQuestion.options[2] ? 'wrong-answer': 'answer'}>{props.eachQuestion.options[2]}</button>
                    
                    <button
                        style={(props.eachQuestion.options[3] == props.eachQuestion.answer) ? highlightCorrectAnswers : {}}
                        value={props.eachQuestion.options[3]}
                        className={props.allCorrectAnswers[props.index+5] == props.eachQuestion.options[3] ? 'wrong-answer': 'answer'}>{props.eachQuestion.options[3]}</button>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Submit