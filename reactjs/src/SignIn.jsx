import React from "react";
import styles from "./signIn.module.css";
import "./index.css";
import Form from "./components/Form/Form";
import Provider from "./components/Provider/Provider";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign In With</h1>
      <Provider />
      <Form />
    </div>
  );
}
