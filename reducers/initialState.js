export const initialQuestionsState = [
  {
    id: 1,
    question: "what is the meaning of life",
    type: "open",
    answer: "42",
    tags: ["js", "react"],
  },
  {
    id: 2,
    question: "is it love?",
    type: "true_false",
    answer: true,
    tags: ["react"],
  },
  {
    id: 3,
    question: "what is love?",
    type: "multiple",
    answer: "a",
    options: [
      { id: "a", text: "Baby" },
      { id: "b", text: "Dont" },
      { id: "c", text: "Hurt" },
    ],
    tags: ["js"],
  },
  {
    id: 4,
    question: "Programming languages used for the web?",
    type: "multiple_multi_answer",
    answers: ["a", "b"],
    options: [
      { id: "a", text: "Javascript" },
      { id: "b", text: "HTML" },
      { id: "c", text: "COBOL" },
      { id: "d", text: "Assembly" },
    ],
    tags: ["js"],
  },
]

export const initialFiltersState = {
  tags: [],
}

/* {
    questions: [
        {
            id: 1,
            text: "what is love?",
            type: "open",
            answer: "Baby don't hurt me",
            tags: ["js", "react"]
        },
        {
            id: 2,
            text: "what is love?",
            type: "true_false",
            answer: true,
            tags: ["react"]
        },
        {
            id: 3,
            text: "what is love?",
            type: "multiple",
            answer: 1,
            options: [
                { id: 1, text: "Baby" },
                { id: 2, text: "Dont" },
                { id: 3, text: "Hurt" },
            ],
            tags: ["js"]
        },
    ],
    // filter by ...
    filter: {
        tag: "js"
    },
    // does this have to be in Redux state?
    viewer: {
        current: 1,         // current question in view
        score: 1,           // number of correct answers
        finished: false     // whether deck is finished
    },

}
*/
