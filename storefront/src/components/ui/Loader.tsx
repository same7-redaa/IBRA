import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
  text?: string;
  subtext?: string;
  showLogo?: boolean;
  className?: string;
}

export default function Loader({
  text = "عسل زوين",
  subtext = "جاري التحميل...",
  showLogo = true,
  className = ""
}: LoaderProps) {
  return (
    <div className={`${styles.loaderWrapper} ${className}`}>
      {showLogo && (
        <div className={styles.logoContainer}>
          <img
            src="/logo.png"
            alt="عسل زوين"
            className={styles.loaderLogo}
          />
        </div>
      )}
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
