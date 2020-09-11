import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, QuestionsState, } from './API';
import Loader from "./components/loader/Loader"
// style 
import { GlobalStyle } from "./App.styles"
import "./app.css"
import firebaseConfig from "./firebase"

const TOTAL_QUESTIONS = 10
export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string
}
function App() {
  
  const message = firebaseConfig.messaging()
  message.requestPermission().then(()=> {
    return message.getToken()
  }).then((token) => {
    console.log("token", token);
  })

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionsState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


  const startQuiz = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user answer 
      const answer = e.currentTarget.value
      // check answer again correct answer
      const correct = questions[number].correct_answer === answer
      // add score if the answer is correct 
      if (correct) setScore(prev => prev + 1)
      // save answer in the array for user answer 
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswer((prev) => [...prev, answerObject])
    }
  }
  const nextQuestion = () => {
    // move on to next question if not last question 
    const nextQuestion = number + 1
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }
  return (
    <>
      <GlobalStyle />
      <div className="main">
        <h1 className="heading">QUIZ APP</h1>
        {/* {
          gameOver ? (
          <form className="userInfo">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name here" />
          </form>
          )
          : null
        } */}
        {
          gameOver ? (
            <button className="start" onClick={startQuiz}>Start Quiz</button>
          ) : null
        }

        {loading ? <Loader /> : null}

        <div className="scorequestion">
          {!gameOver && !loading ? <p>Question # {number + 1} / {TOTAL_QUESTIONS} </p> : null}
          {!gameOver && !loading ? <p>Score: {score} </p> : null}
        </div>

        {
          !loading && !gameOver ? (
            <QuestionCard
              // questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswer ? userAnswer[number] : undefined}
              callback={checkAnswer}
            />
          ) : null
        }

        {
          !loading && !gameOver && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>Next</button>
          ) : null
        }
        {
          !loading && !gameOver && userAnswer.length === 10 ? (
            <button className="submit" onClick={nextQuestion}>Submit</button>
          ) : null
        }
      </div>
    </>
  );
}



export default App;
