"use client";

import { Button } from "ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>this is release test</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
