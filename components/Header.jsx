import React from "react"
import Link from "next/link"

import { useRouter } from "next/router"

import styles from "./Header.module.css"

import { logout } from "../utils/auth"

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

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
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
