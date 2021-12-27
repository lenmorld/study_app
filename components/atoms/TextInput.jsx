import React from "react"

import styles from "./Form-field.module.css"

export default function Input({ label, ...props }) {
  return (
    <div className={styles.field}>
      <input {...props} placeholder={label} />
    </div>
  )
}
