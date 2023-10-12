"use client";

import { Button } from "ui";

import styles from "../styles/index.module.css";
import { useState } from "react";
import { getMessageFromAPI } from "./MessageAPI";

export default function Web() {

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleClick = async () => {
    const result = await getMessageFromAPI();
    if(result){
      setMessage(result);

    }else{
      setError("something wrong");
    }

  }

  return (
    <div className={styles.container}>
      <h1>this is release test</h1>
      <Button onClick={handleClick} text="Say Hi to Laravel." />
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
