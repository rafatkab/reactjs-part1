import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function ForgotPass() {
  return (
    <div className={styles.container}>
      <form>
        <label>
          <div>Email</div>
          <input type="email" />
        </label>
        <Link to="/">
          <button type="submit">Send to email</button>
        </Link>
      </form>
    </div>
  );
}
