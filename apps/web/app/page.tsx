"use client";

import { Button } from "ui";

import styles from "../styles/index.module.css";
import GameReviewCard from "./components/GameReviewCard";

export default function Web() {

  const mockData = {
    userName: "testUser",
    userIcon: "https://i.imgur.com/0y8Ftya.png",
    gameName: "testGame",
    gameIcon: "https://i.imgur.com/0y8Ftya.png",
    reviewTitle: "最高のゲーム",
    reviewText: "これ最高におもしろいっす。すげーーっす。",
    hashtags: ["test", "review", "text"]
  }


  return (
    <div className={styles.container}>
      <GameReviewCard data={mockData}/>
    </div>
  );
}
