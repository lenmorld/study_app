import React from "react"
import Link from "next/link"

import Button from "./atoms/Button"

import styles from "./Home.module.css"

import CardsList from "./CardsList"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Ready to test your knowledge of <span className={styles.topic} />?
      </h1>
      <div className={styles.buttons}>
        <div className={styles.block}>
          {/* <div>Test your skills</div> */}
          <Button size="large" success>
            <Link href="/quiz">Start quiz</Link>
          </Button>
        </div>

        <div className={styles.block}>
          {/* <div>Add some new cards</div> */}
          <Button size="large" primary>
            <Link href="/add">Add card</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
