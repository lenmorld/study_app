import React from "react"
import Link from "next/link"

import { useRouter } from "next/router"

import { connect } from "react-redux"
import styles from "./Header.module.css"

import { isUserLoggedIn } from "../services/auth"

// TODO: use logout action instead
import { logout } from "../actions/auth"
// import { logout } from "../services/auth"

function Header({ logoutAction }) {
  const router = useRouter()

  const handleLogout = () => {
    const successRedirect = () => router.push("/login")

    // logout()
    // router.push("/login")
    logoutAction(successRedirect)
  }

  return (
    <header className={styles.header}>
      <h2>Studify</h2>
      <nav className={styles.nav}>
        <ul>
          {!isUserLoggedIn() && (
            <>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a>Sign up</a>
                </Link>
              </li>
            </>
          )}
          {isUserLoggedIn() && (
            <>
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
                <a onClick={handleLogout}>Logout</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

const mapDispatchToProps = {
  logoutAction: logout,
}

export default connect(null, mapDispatchToProps)(Header)
