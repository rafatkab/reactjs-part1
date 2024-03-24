import React, { useRef } from "react";
import styles from "./styles.module.css";
import google from "../../images/google.jpg";
import facebook from "../../images/facebook.png";

export default function Provider() {
  return (
    <div className={styles.container}>
      <a id={styles.facebookLink} href="https://www.facebook.com">
        <button id={styles.facebook} className={styles.provider}>
          Facebook
        </button>
      </a>
      <a id={styles.googleLink} href="https://www.google.com">
        <button id={styles.google} className={styles.provider}>
          Google
        </button>
      </a>
    </div>
  );
}
