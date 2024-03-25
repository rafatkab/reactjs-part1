import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      for (let i = 0; i < data.length; i++) {
        if (data[i].email == username && data[i].address.zipcode == password) {
          navigate("/welcome", {
            state: { name: data[i].name },
          });
        }
      }
      setError(true);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <div className={styles.container}>
      {error && (
        <div className={styles.error}>Username or Password is incorrect</div>
      )}
      <form onSubmit={submit}>
        <label>
          <div>Username</div>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <div>
            Password{" "}
            <Link to="/forgot-password">
              <span>Forgot?</span>
            </Link>
          </div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <div className={styles.signUp}>
        Not a member?{" "}
        <Link to="/sign-up">
          <span className={styles.signUpLink}>Sign up now</span>
        </Link>
      </div>
    </div>
  );
}
