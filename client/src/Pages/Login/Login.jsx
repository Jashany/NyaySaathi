import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";
import hello from "../../assets/hello.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "", // Role 
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

    const type = formData.role.toLowerCase();

    const f = async () => {
      const res = await axios.post(`http://localhost:3000/api/${type}/login`, {
        email: formData.email,
        password: formData.password,
      },{withCredentials: true});
      
      if(res.status === 200){
        navigate(`/${type}`);
      }
      else{
        alert("Wrong Password or Email");
      }
    }

    f();
    
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
            <label>Select Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={styles.inputField}
              style={{ width: "350px" }}
            >
              <option value="">User</option>
              <option value="lawyer">Lawyer</option>
              <option value="judge">Judge</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: "350px" }}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{ width: "350px" }}
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
