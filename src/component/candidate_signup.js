import React, { useState } from "react";
import axios from "axios";
import Header from "./header";// Assuming your header component is in "Header.js"
import "./candidate_signup.css"

function Candidate() {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    password: "",
    job_type: "",
    location: "",
    logo: "",
    qualification: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/candidate", formData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="candidate-form">
        <h1>Signup for candidate</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="job_type"
            placeholder="Job Type"
            value={formData.job_type}
            onChange={handleChange}
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Candidate;
