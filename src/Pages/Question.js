import React, {useEffect, useState} from "react";

const Question = (props)=> {

    const [selectedOption, setSelectedOption] = useState('')

    const activeStyle = {
        backgroundColor: 'rgb(21, 21, 136)',
        color: 'white'
    }

    useEffect(() => {
    if (selectedOption === props.eachQuestion.answer){
        props.setCorrectAnswers(prevValue => prevValue + 1)
    }
    {props.setAllCorrectAnswers(prevState => {
        return prevState.concat(selectedOption)
    })}
    }, [selectedOption])

    return(
        <div className="question-page">
            <div className="question-answer-container">
                <h4 className="question">{props.eachQuestion.question}</h4>

                <div className="option-btn" >
                    <button
                        className="answer"
                        value={props.eachQuestion.options[0]}
                        style={selectedOption === props.eachQuestion.options[0] ? activeStyle : {}}
                        onClick={(e) => {
                            setSelectedOption(props.eachQuestion.options[0])
                            }}    
                        >{props.eachQuestion.options[0]}</button>
                    <button
                        className="answer"
                        value={props.eachQuestion.options[1]}
                        style={selectedOption === props.eachQuestion.options[1] ? activeStyle : {}}
                        onClick={(e) => {
                            setSelectedOption(props.eachQuestion.options[1])
                            }}
                        >{props.eachQuestion.options[1]}</button>
                    <button
                        className="answer"
                        value={props.eachQuestion.options[2]}
                        style={selectedOption === props.eachQuestion.options[2] ? activeStyle : {}}
                        onClick={(e) => {
                            setSelectedOption(props.eachQuestion.options[2])
                            }}
                        >{props.eachQuestion.options[2]}</button>
                    <button
                        className="answer"
                        value={props.eachQuestion.options[3]}
                        style={selectedOption === props.eachQuestion.options[3] ? activeStyle : {}}
                        onClick={(e) => {
                            setSelectedOption(props.eachQuestion.options[3])
                            }}
                        >{props.eachQuestion.options[3]}</button>

                </div>
                <hr />
            </div>
        </div>
    )
}

export default Question