import React from "react";

const Option = (props)=> {

    const activeStyle = {
        backgroundColor: 'blue',
        color: 'white'
    }

    return (
            <div className="answer-container">
                <button className="answer"
                value={props.option}
                style={props.selectedOption == props.option ? activeStyle : {}}
                onClick={(e) => {
                    props.setSelectedOption(props.option)
                    props.pickAnswer(e)
                }}>{props.option}</button>
            </div>
    )
}

export default Option