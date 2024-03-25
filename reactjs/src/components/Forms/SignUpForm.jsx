import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  console.log(username, password, confPassword);
  function submit(event) {
    event.preventDefault();

    if (username.length < 8) {
      setErrorMessage("Username has to be 8 or more characters");
      setError(true);
    } else if (password != confPassword) {
      setErrorMessage("Passwords do not match");
      setError(true);
    } else {
      navigate("/");
    }
  }

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{errorMessage}</div>}
      <form onSubmit={submit}>
        <label>
          <div>Username</div>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <div>Re-Enter Password</div>
          <input
            type="password"
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
