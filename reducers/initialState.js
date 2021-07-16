export const initialQuestionsState = [
  {
    id: 1,
    text: "what is love?",
    type: "open",
    answer: "Baby don't hurt me",
    tags: ["js", "react"],
  },
  {
    id: 2,
    text: "what is love?",
    type: "true_false",
    answer: true,
    tags: ["react"],
  },
  {
    id: 3,
    text: "what is love?",
    type: "multiple",
    answer: 1,
    options: [
      { id: 1, text: "Baby" },
      { id: 2, text: "Dont" },
      { id: 2, text: "Hurt" },
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
                { id: 2, text: "Hurt" },
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
