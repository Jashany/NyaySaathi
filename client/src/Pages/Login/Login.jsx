import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";
import hello from "../../assets/hello.png";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className={styles.signupForm}>
      <div className={styles.header}>
        <div>
          <img src={logo} alt="" />
          <p>Justice, Simplified</p>
        </div>

        <button></button>
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              style={{ width: "350px" }}
              onChange={handleInputChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              style={{ width: "350px" }}
              onChange={handleInputChange}
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <img
          style={{
            position: "absolute",
            right: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "150px",
          }}
          src={hello}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
