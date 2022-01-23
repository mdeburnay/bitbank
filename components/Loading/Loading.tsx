import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.body_loading}>
      <h1>Loading...</h1>
      <img
        className={styles.loading_image}
        src="https://ih1.redbubble.net/image.449726711.9029/flat,1000x1000,075,f.u1.jpg"
      />
    </div>
  );
};

export { Loading };
