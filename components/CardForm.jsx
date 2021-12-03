import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { RiMarkdownLine } from "react-icons/ri"
import { AiOutlineEye, AiOutlineEdit, AiOutlineSave } from "react-icons/ai"

import { QUESTIONS_ADD } from "../constants/questions"

import styles from "./CardForm.module.css"
import CardFormField from "./CardFormField"

import Button from "./atoms/Button"

export default function CardForm() {
  const router = useRouter()

  // const [markdownText, setMarkdownText] = useState("")
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const [isPreview, togglePreview] = useState(false)

  const handleChange = (e) => {
    const { value, name } = e.target

    switch (name) {
      case "question":
        setQuestion(value)
        break
      case "answer":
        setAnswer(value)
        break
      default:
        break
    }

    // setText(e.target.value)
    // setMarkdownText(text)
  }

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim()
    // if (e.key === "Enter" && trimmedText) {
    //   handleSubmit(e)
    // }
  }

  const dispatch = useDispatch()

  // const handleBlur = (e) => setMarkdownText(text)

  const handlePreview = (e) => {
    togglePreview((preview) => !preview)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: QUESTIONS_ADD,
      payload: {
        question,
        type: "open",
        answer,
        tags: ["js"],
      },
    })

    setQuestion("")
    setAnswer("")

    // navigate to index
    router.push("/")

    // setText("")
    // setMarkdownText("")
  }

  return (
    <div className={styles.formContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <h2>Add new question</h2>
        <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
          <RiMarkdownLine />
        </span>
      </div>

      <form>
        <CardFormField
          title="Question"
          name="question"
          value={question}
          handleChange={handleChange}
          isPreview={isPreview}
        />

        <CardFormField
          title="Answer"
          name="answer"
          value={answer}
          handleChange={handleChange}
          isPreview={isPreview}
        />

        <div className={styles.buttonContainers}>
          <Button
            className={styles.button}
            onClick={handlePreview}
            primary
            style={{ margin: "1rem" }}
            icon={isPreview ? AiOutlineEdit : AiOutlineEye}
            text={isPreview ? "Edit" : "Preview"}
          />

          <Button
            className={styles.button}
            onClick={handleSubmit}
            success
            style={{ margin: "1rem" }}
            icon={AiOutlineSave}
            text="Save"
          />
        </div>
      </form>
    </div>
  )
}
