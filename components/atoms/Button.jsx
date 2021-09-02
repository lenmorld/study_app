import React from "react"
import styles from "./Button.module.css"

export default function Button({
  children,
  onClick,
  primary,
  secondary,
  success,
  size = "medium",
  className,
  style,
  icon: Icon, // ignores chilren
  text, // ignores chilren
}) {
  const customStyles = []

  if (className) {
    customStyles.push(className)
  }

  if (primary) {
    customStyles.push(styles.primary)
  }

  if (secondary) {
    customStyles.push(styles.secondary)
  }

  if (success) {
    customStyles.push(styles.success)
  }

  customStyles.push(styles[size])

  console.log(customStyles)

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${customStyles.join(" ")}`}
      style={style}
    >
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      {text && <span>{text}</span>}

      {!Icon && !text && children}
    </button>
  )
}
