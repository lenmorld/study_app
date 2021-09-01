import React, { useEffect, useState } from "react"
import {
  AiOutlineQuestionCircle,
  AiOutlineCheckCircle,
  AiOutlineEye,
} from "react-icons/ai"

import { useSelector } from "react-redux"
import { useRouter } from "next/router"

import Button from "./atoms/Button"

import styles from "./Viewer.module.css"

import store from "../store"

const selectQuestions = (state) => state.questions

// TODO: viewing logic, state management of current question, answer, score, progress, etc

export default function Viewer() {
  const router = useRouter()

  const questions = useSelector(selectQuestions)
  console.log(questions)

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  // NO NEED if preloaded by reducer
  // fetch questions on page load
  // useEffect(() => {
  //   //
  // }, [])

  const handleSubmitAnswer = () => {
    setCurrentCardIndex((currentIndex) => {
      if (currentIndex >= questions.length - 1) {
        // rotate
        // return 0
        router.push("/")
      }

      return currentIndex + 1
    })
  }

  const handleSubmitAnswerCorrect = () => {
    setCurrentScore((score) => score + 1)
    handleSubmitAnswer()
  }

  const handleSubmitAnswerWrong = () => {
    // setCurrentScore((score) => score - 1)
    handleSubmitAnswer()
  }

  const currentCard = questions[currentCardIndex]

  if (!currentCard) {
    return null
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.tag}>Javascript</div>
        {/* TODO: display progress bar */}
        <div className={styles.progress}>
          {currentCardIndex + 1}/{questions.length}
        </div>
        <div>{currentScore}</div>
      </div>

      <div className={styles.question}>
        <h1>{currentCard.question}</h1>
      </div>

      <div className={styles.controls}>
        <Button
          secondary
          onClick={handleSubmitAnswerWrong}
          style={{ margin: "1rem" }}
        >
          <span>
            <AiOutlineQuestionCircle />
          </span>
          <span>I didn't know that!</span>
        </Button>

        <Button
          type="button"
          success
          onClick={handleSubmitAnswerCorrect}
          style={{ margin: "1rem" }}
        >
          <span>
            <AiOutlineCheckCircle />
          </span>
          <span>I knew it!</span>
        </Button>
      </div>
    </div>
  )
}
