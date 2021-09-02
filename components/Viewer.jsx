import React, { useEffect, useCallback, useState } from "react"
import {
  AiOutlineQuestionCircle,
  AiOutlineCheckCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai"

import { useSelector } from "react-redux"
import { useRouter } from "next/router"

import {
  QUESTION_OPEN,
  QUESTION_MULTIPLE_CHOICE,
  QUESTION_TRUE_FALSE,
} from "../constants/questionTypes"

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
  const [answerVisible, setAnswerVisible] = useState(false)

  // NO NEED if preloaded by reducer
  // fetch questions on page load
  // useEffect(() => {
  //   //
  // }, [])

  const handleSubmitAnswer = useCallback(() => {
    // reset show/hide answer
    setAnswerVisible(false)

    setCurrentCardIndex((currentIndex) => {
      if (currentIndex >= questions.length - 1) {
        // rotate
        // return 0
        router.push("/")
      }

      return currentIndex + 1
    })
  }, [questions, router])

  const handleSubmitAnswerCorrect = useCallback(() => {
    setCurrentScore((score) => score + 1)
    handleSubmitAnswer()
  }, [handleSubmitAnswer])

  const handleSubmitAnswerWrong = useCallback(() => {
    // setCurrentScore((score) => score - 1)
    handleSubmitAnswer()
  }, [handleSubmitAnswer])

  const handleReveal = () => {
    setAnswerVisible(true)
  }

  const currentCard = questions[currentCardIndex]

  // ## different question types rendering

  const OpenQuestionView = useCallback(() => {
    return (
      <>
        <div className={styles.answers}>
          {answerVisible && <p className={styles.p}>{currentCard.answer}</p>}
        </div>

        <div className={styles.controls}>
          {!answerVisible && (
            <Button
              primary
              onClick={handleReveal}
              icon={AiOutlineEye}
              text="Show answer"
            />
          )}
          {answerVisible && (
            <>
              <Button
                secondary
                onClick={handleSubmitAnswerWrong}
                style={{ margin: "1rem" }}
                icon={AiOutlineQuestionCircle}
                text="I didn't know that!"
              />

              <Button
                type="button"
                success
                onClick={handleSubmitAnswerCorrect}
                style={{ margin: "1rem" }}
                icon={AiOutlineCheckCircle}
                text="I knew it!"
              />
            </>
          )}
        </div>
      </>
    )
  }, [
    answerVisible,
    currentCard,
    handleSubmitAnswerWrong,
    handleSubmitAnswerCorrect,
  ])

  const TrueFalseView = useCallback(() => {
    return (
      <>
        <div className={styles.options}>
          <Button flat onClick={handleSubmitAnswerWrong}>
            True
          </Button>
          <Button flat onClick={handleSubmitAnswerCorrect}>
            False
          </Button>
        </div>
        {/* <div className={styles.controls}>
          <Button>Submit</Button>
        </div> */}
      </>
    )
  }, [handleSubmitAnswerWrong, handleSubmitAnswerCorrect])

  const MultipleChoiceView = useCallback(() => {
    if (!currentCard?.options?.length) {
      return null
    }

    return (
      <div className={styles.optionsFullWidth}>
        {currentCard.options.map((option) => (
          <Button key={option.id} flat onClick={handleSubmitAnswerCorrect}>
            {option.text}
          </Button>
        ))}
      </div>
    )
  }, [currentCard, handleSubmitAnswerCorrect])

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

      {currentCard.type === QUESTION_OPEN && OpenQuestionView()}
      {currentCard.type === QUESTION_TRUE_FALSE && TrueFalseView()}
      {currentCard.type === QUESTION_MULTIPLE_CHOICE && MultipleChoiceView()}
    </div>
  )
}
