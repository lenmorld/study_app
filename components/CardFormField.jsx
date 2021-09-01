import React, { useState } from "react"

import markdown from "../utils/markdown"

import styles from "./CardForm.module.css"

export default function CardFormField({
  title,
  name,
  value,
  handleChange,
  isPreview,
}) {
  return (
    <div className={styles.field}>
      <h3>{title}</h3>
      <div className={styles.textareaContainer}>
        {isPreview ? (
          <div
            style={{
              // overflowWrap: "break-word",
              wordWrap: "break-word",
              outline: "none",
              overflow: "scroll",
              // border: "1px solid gray",
              padding: "0.5rem",
            }}
            className={styles.markdown}
            dangerouslySetInnerHTML={{
              __html: markdown.render(value),
            }}
          />
        ) : (
          <textarea
            value={value}
            name={name}
            onChange={handleChange}
            className={styles.textarea}
          />
        )}

        {/* <h3>Markdown preview</h3> */}
        {/* <div
          style={{
            overflowWrap: "break-word",
            outline: "none",
            // border: "1px solid gray",
            padding: "0.5rem",
          }}
          className={styles.markdown}
          dangerouslySetInnerHTML={{
            __html: markdown.render(value),
          }}
        /> */}
      </div>
    </div>
  )
}
