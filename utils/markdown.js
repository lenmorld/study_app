import markdownit from "markdown-it"
// import hljs from "highlight.js" // https://highlightjs.org/

// https://www.npmjs.com/package/highlight.js
// hljs.initHighlightingOnLoad()

const markdown = new markdownit({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  // highlighting
  //   highlight(str, lang) {
  //     if (lang && hljs.getLanguage(lang)) {
  //       try {
  //         return hljs.highlight(lang, str).value
  //       } catch (__) {}
  //     }

  //     return "" // use external default escaping
  //   },
})

export default markdown
