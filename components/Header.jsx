import React from "react"
import Link from "next/link"

import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Studify</h2>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/add">
              <a>New question</a>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <a>Cards list</a>
            </Link>
          </li>
          <li>
            <Link href="/quiz">
              <a>Start quiz</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
