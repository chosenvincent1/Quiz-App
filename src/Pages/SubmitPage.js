import React from "react";
import Submit from './Submit'
import data from '../Components/Data'

function submitPage(props) {

    const submitPage = data.map((item, index)=> {
        return <Submit key={index} eachQuestion={item} 
                    correctAnswers={props.correctAnswers}
                    allCorrectAnswers={props.allCorrectAnswers} 
                    setAllCorrectAnswers={props.setAllCorrectAnswers}
                    currentPage={props.currentPage}
                    index={index}
                    />
      })

    return(
        <div>
            {submitPage}

            <div className="replay-container">
                <p className="score">You scored {props.correctAnswers}/8 correct answers</p>
                <button className="replay-btn" onClick={() => {
                    props.setCurrentPage('question')
                    props.setAllCorrectAnswers([])
                    props.setCorrectAnswers(0)
                    }}>Play Again</button>
            </div>
        </div>
    )
}

export default submitPage