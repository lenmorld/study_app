import React from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Layout.module.css"

import Header from "./Header"

export default function Layout({ children }) {
  // https://nextjs.org/docs/api-reference/next/head
  return (
    <div className={styles.container}>
      <Head>
        <title>Study App</title>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/default.min.css"
          key="highlight.js"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />

      {/* <hr /> */}

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
