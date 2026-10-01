"use client";

import React from "react";
import Link from "next/link";
import styles from "./ScaleButton.module.css";

interface ScaleButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  variant?: "neon" | "dark" | "white";
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function ScaleButton({
  children,
  onClick,
  href,
  variant = "neon",
  size = "md",
  isActive = false,
  fullWidth = false,
  className = "",
  type = "button",
}: ScaleButtonProps) {
  const variantClass =
    variant === "dark"
      ? styles.variantDark
      : variant === "white"
      ? styles.variantWhite
      : styles.variantNeon;

  const sizeClass =
    size === "sm"
      ? styles.sizeSm
      : size === "lg"
      ? styles.sizeLg
      : styles.sizeMd;

  const combinedClasses = [
    styles.scaleButton,
    variantClass,
    sizeClass,
    isActive ? styles.activeTab : "",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        <span className={styles.btnTxt}>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      <span className={styles.btnTxt}>{children}</span>
    </button>
  );
}
