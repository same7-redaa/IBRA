import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  text?: string;
  subtext?: string;
  className?: string;
}

export default function Loader({
  text = "عسل زوين",
  subtext = "جاري التحميل...",
  className = ""
}: LoaderProps) {
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
      </div>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
    </div>
  );
}
