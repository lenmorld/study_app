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
  QUESTION_MULTIPLE_CHOICE_MULTI_ANSWER,
} from "../constants/questionTypes"

import Button from "./atoms/Button"
import Spacer from "./atoms/Spacer"

import styles from "./Viewer.module.css"

import store from "../store"

const selectQuestions = (state) => state.questions

// TODO: viewing logic, state management of current question, answer, score, progress, etc

export default function Viewer() {
  const router = useRouter()

  const questions = useSelector(selectQuestions)
  // console.log(questions)

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [answerVisible, setAnswerVisible] = useState(false)

  const [trueFalseSelected, setTrueFalseSelected] = useState(null)

  // use for Multiple choice that allows multiple answers
  const [selectedOptions, setSelectedOptions] = useState({})

  const [selectedOption, setSelectedOption] = useState(null)

  const currentCard = questions[currentCardIndex]

  // NO NEED if preloaded by reducer
  // fetch questions on page load
  // useEffect(() => {
  //   //
  // }, [])

  const handleSubmitAnswer = useCallback(() => {
    // TODO: determine if answer correct/wrong
    // and update score
    // Replace handleSubmitAnswerCorrect and handleSubmitAnswerWrong
    // with reusable logic for all question types

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

    // clear answers states
    setSelectedOption(null)
    setSelectedOptions({})
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

  const handleChooseOption = useCallback(
    (e) => {
      console.log(e.target.id)

      if (currentCard.type === QUESTION_TRUE_FALSE) {
        // for true/false, only one answer allowed
        // just toggle previous answer
        setTrueFalseSelected(e.target.id)
      } else if (currentCard.type === QUESTION_MULTIPLE_CHOICE) {
        setSelectedOption(e.target.id)
      } else if (currentCard.type === QUESTION_MULTIPLE_CHOICE_MULTI_ANSWER) {
        setSelectedOptions((prevSelected) => {
          return {
            ...prevSelected,
            [e.target.id]: e.target.id,
          }
        })
      }
    },
    [setTrueFalseSelected, currentCard],
  )

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
    // console.log("trueFalseSelected: ", trueFalseSelected)
    return (
      <>
        <div className={styles.options}>
          <Button
            flat
            onClick={handleChooseOption}
            id="true"
            selected={trueFalseSelected === "true"}
          >
            True
          </Button>
          <Button
            flat
            onClick={handleChooseOption}
            id="false"
            selected={trueFalseSelected === "false"}
          >
            False
          </Button>
        </div>
        {trueFalseSelected && (
          <>
            <Spacer />
            <div className={styles.controls}>
              <Button primary onClick={handleSubmitAnswer}>
                Submit
              </Button>
            </div>
          </>
        )}
      </>
    )
  }, [handleChooseOption, trueFalseSelected, handleSubmitAnswer])

  const MultipleChoiceView = useCallback(() => {
    if (!currentCard?.options?.length) {
      return null
    }

    const hasMultiAnswers = currentCard?.answers?.length

    // console.log("selectedOption: ", selectedOption, currentCard.options)
    return (
      <>
        <div className={styles.optionsFullWidth}>
          {/* options */}
          {currentCard.options.map((option) => (
            <Button
              key={option.id}
              id={option.id}
              flat
              onClick={handleChooseOption}
              selected={
                hasMultiAnswers
                  ? Object.keys(selectedOptions).includes(option.id)
                  : selectedOption === option.id
              }
            >
              {option.text}
            </Button>
          ))}
        </div>
        {/* submit button */}
        {(hasMultiAnswers
          ? Object.keys(selectedOptions).length
          : selectedOption) && (
          <>
            <Spacer />
            <div className={styles.controls}>
              <Button primary onClick={handleSubmitAnswer}>
                Submit
              </Button>
            </div>
          </>
        )}
      </>
    )
  }, [
    currentCard,
    selectedOption,
    selectedOptions,
    handleChooseOption,
    handleSubmitAnswer,
  ])

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
      {currentCard.type === QUESTION_MULTIPLE_CHOICE_MULTI_ANSWER &&
        MultipleChoiceView()}
    </div>
  )
}
