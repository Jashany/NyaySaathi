import React, { useState } from "react";
import styles from "./DetaineeSignUp.module.css";
import logo from "../../assets/logo.png";
import hello from "../../assets/hello.png";
const DetaineeSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    nationality: "",
    identificationNumber: "",
    offence: "",
    dateOfArrest: "",
    legalRepresentationStatus: "",
    contactNumber: "",
    chargeSheet: null,
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
                name="identificationNumber"
                value={formData.identificationNumber}
                onChange={handleInputChange}
                style={{ width: "350px" }}
                className={styles.inputField}
                />
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.group}>
            <div className={styles.formGroup}>
              <label>Offence</label>
              <select
                name="offence"
                value={formData.offence}
                onChange={handleInputChange}
                className={styles.selectField}
                style={{ width: "350px" }}
                >
                <option style={{ width: "350px" }} value=""></option>
                <option style={{ width: "350px" }} value="ipc302">
                  IPC 302
                </option>
                <option style={{ width: "350px" }} value="ipc420">
                  IPC 420
                </option>
                <option style={{ width: "350px" }} value="ipc069">
                  IPC 069
                </option>
                <option style={{ width: "350px" }} value="ipc198">
                  IPC 198
                </option>
              </select>
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
