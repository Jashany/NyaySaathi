import React, { useState } from "react";
import styles from "./DetaineeSignUp.module.css";
import logo from "../../assets/logo.png";
import hello from "../../assets/hello.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OffenceInput from "./Comp";
const DetaineeSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    nationality: "",
    Number: "",
    idNumber: "",
    offence: "",
    dateOfArrest: "",
    legalRepresentationStatus: "",
    contactNumber: "",
    chargeSheetLink: null,
    number:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      chargeSheet: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const f = async () => {
      const formattedDateOfArrest = new Date(formData.dateOfArrest).toISOString().split('T')[0];
      const date = new Date();
      const response = await axios.post("http://localhost:3000/api/user/register", {
        fullName: formData.fullName,
        email: formData.email,
        age: formData.age,
        gender: formData.gender,
        nationality: formData.nationality,
        idNumber: formData.idNumber,
        offence: formData.offence,
        dateOfArrest: date,
        legalRepresentationStatus: formData.legalRepresentationStatus,
        contactNumber: formData.contactNumber,
        chargeSheet: formData.chargeSheet ? formData.chargeSheet.name : null, 
        number:"798090998",
        chargeSheetLink: "jk",
      }, {
        withCredentials: true,
      })

      if(response.status === 200){
        navigate("/login");
      }
      else{
        alert("Something went wrong");
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

        <button>Login</button>
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>SignUp <span>
            (For Detainee)
            </span> 
            </h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input
            
            type="text"
            name="fullName"
            value={formData.fullName}
            style={{ width: "350px" }}
            onChange={handleInputChange}
            className={styles.inputField}
            />
            </div>
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
          </div>
          <div className={styles.group}>
            <div className={styles.formGroup}>
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className={styles.inputField}
                style={{ width: "100px" }}
                />
            </div>
            <div className={styles.formGroup}>
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className={styles.selectField}
                style={{ width: "150px" }}
                >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className={styles.inputField}
                />
            </div>
            <div className={styles.formGroup}>
              <label>Identification Number</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                style={{ width: "350px" }}
                className={styles.inputField}
                />
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.group}>
            <div className={styles.formGroup}>
              <OffenceInput/>
            </div>
            <div className={styles.formGroup}>
              <label>Date of Arrest</label>
              <input
                type="date"
                name="dateOfArrest"
                style={{ width: "300px" }}
                value={formData.dateOfArrest}
                onChange={handleInputChange}
                className={styles.inputField}
                placeholder=""
                />
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.formGroup}>
              <label>Legal Representation Status</label>
              <input
                type="text"
                style={{ width: "350px" }}
                name="legalRepresentationStatus"
                value={formData.legalRepresentationStatus}
                onChange={handleInputChange}
                className={styles.inputField}
                />
            </div>
            <div className={styles.formGroup}>
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                style={{ width: "350px" }}
                className={styles.inputField}
                />
            </div>
          </div>
          <div className={styles.uploadContainer}>
      <label className={styles.label}>Upload ChargeSheet</label>
      <input
        type="file"
        id="file"
        className={styles.fileInput}
        onChange={handleFileChange}
        />
      <label htmlFor="file" className={styles.uploadButton}>
        Upload
      </label>
    </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
            <img style={{
                position:"absolute",
                right:"0",
                top:"50%",
                transform:"translateY(-50%)",
                width:"300px",
            }} src={hello} alt="" />
      </div>
    </div>
  );
};

export default DetaineeSignUp;
