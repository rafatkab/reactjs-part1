import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./welcome.module.css";

export default function Welcome() {
  const [allUsers, setAllUsers] = useState([]);
  const location = useLocation();
  const { name } = location.state;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setAllUsers(data));

  return (
    <div className={styles.container}>
      <h1>Welcome {name}</h1>
      <table className={styles.users}>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>user name</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
