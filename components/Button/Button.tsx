import React from "react";
import Router from "next/router";
import styles from "./Button.module.css";

interface IPageProps {
  page: number;
}

interface IButtonProps extends IPageProps {
  onClick?: () => void;
  disabled?: boolean;
  type: string;
}

const Button = ({ page, type }: IButtonProps) => {
  if (type === "next") {
    return (
      <button
        onClick={() => Router.push(`/?page=${page + 1}`)}
        className={styles.button}
      >
        Next
      </button>
    );
  }

  return (
    <button
      onClick={() => Router.push(`/?page=${page - 1}`)}
      disabled={page <= 1}
      className={styles.button}
    >
      Prev
    </button>
  );
};

export { Button };
