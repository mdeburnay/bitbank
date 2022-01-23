import React from "react";
import styles from "./Loading.module.css";

const Loading = (props: any) => {
  return (
    <div className={props ? styles.body_loading : styles.none}>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { Loading };
