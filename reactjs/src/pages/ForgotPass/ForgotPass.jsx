import React from "react";
import Form from "../../components/Forms/ForgotPassForm.jsx";
import styles from "./forgot-pass.module.css";

export default function ForgotPass() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create new password via email</h1>
      <Form />
    </div>
  );
}
