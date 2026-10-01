import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  text?: string;
  className?: string;
}

export default function Loader({ text = "Loading", className = "" }: LoaderProps) {
  return (
    <div className={`${styles.loaderWrapper} ${className}`}>
      <div className={styles.loader}>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.text}><span>{text}</span></div>
        <div className={styles.line} />
      </div>
    </div>
  );
}
