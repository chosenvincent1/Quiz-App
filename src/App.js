import React, { useState } from "react";
import SubmitPage from './Pages/SubmitPage'
import QuestionPage from "./Pages/QuestionPage";
import Start from "./Pages/Start";
import data from "./Components/Data"
import "./App.css"


const App = ()=> {

  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [allCorrectAnswers, setAllCorrectAnswers] = useState([])
  const [currentPage, setCurrentPage] = useState('start')

  

  console.log(allCorrectAnswers)

  return(
    <div>

      {currentPage=='start' && <Start setCurrentPage={setCurrentPage} />}

      { currentPage=='question' && <QuestionPage 
              correctAnswers={correctAnswers} 
              setCorrectAnswers={setCorrectAnswers}
              allCorrectAnswers={allCorrectAnswers}
              setAllCorrectAnswers={setAllCorrectAnswers}
              setCurrentPage={setCurrentPage}
            />}

      {   currentPage=='submit' &&   <SubmitPage 
              correctAnswers={correctAnswers}
              setCorrectAnswers={setCorrectAnswers}
              allCorrectAnswers={allCorrectAnswers}
              setAllCorrectAnswers={setAllCorrectAnswers}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />}
    </div>
  )
}

export default App