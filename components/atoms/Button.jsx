import React from "react"
import styles from "./Button.module.css"

export default function Button({
  children,
  onClick,
  primary,
  secondary,
  success,
  flat,
  size = "medium",
  className,
  style,
  icon: Icon, // ignores chilren
  text, // ignores chilren
  selected,
  ...otherProps
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

  if (flat) {
    customStyles.push(styles.flat)
  }

  if (selected) {
    customStyles.push(styles.selected)
  }

  if (success) {
    customStyles.push(styles.success)
  }

  customStyles.push(styles[size])

  // console.log(customStyles)

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${customStyles.join(" ")}`}
      style={style}
      {...otherProps}
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
