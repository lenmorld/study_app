import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import store from "../store"

const selectQuestions = (state) => state.questions

const fetchQuestions = async () => {
  // const raw = await fetch("https://jsonplaceholder.typicode.com/posts")
  // const posts = await raw.json()
  // const questions = posts.slice(0, 4).map((post) => ({
  //   ...post,
  //   question: post.title,
  //   answer: post.title,
  //   type: "open",
  // }))
  // store.dispatch({ type: "questions/load", payload: questions })
}

export default function CardsList(params) {
  // instead of accessing store directly, use a selector
  // const { questions } = store.getState()

  useEffect(() => {
    fetchQuestions()
  }, [])

  const questions = useSelector(selectQuestions)

  return (
    <div>
      <h1>CardsList</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question} : {question.answer}
          </li>
        ))}
      </ul>
    </div>
  )
}
