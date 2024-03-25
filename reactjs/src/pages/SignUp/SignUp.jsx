import React from "react";
import styles from "./sign-up.module.css";
import Provider from "../../components/Provider/Provider";
import Form from "../../components/Forms/SignUpForm";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign Up With</h1>
      <Provider />
      <Form />
    </div>
  );
}
