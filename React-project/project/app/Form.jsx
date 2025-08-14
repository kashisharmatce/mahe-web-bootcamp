"use client";
import React, { useState } from "react";

const NewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    feedback: "",
  });

  const [entries, setEntries] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEntries((prevEntries) => [...prevEntries, formData]);
    setFormData({ name: "", contact: "", feedback: "" });
  };
  return (
    <div>
      <input
        type="text"
        name = "name"
        value={formData.name}
        placeholder="enter your name"
        onChange={handleChange}
      />{" "}
      <br />
      <input
        type="text"
         name = "contact"
        value={formData.contact}
        placeholder="enter your contact"
        onChange={handleChange}
      />{" "}
      <br />
      <input
        type="text"
         name = "feedback"
        value={formData.feedback}
        placeholder="Please give feedback"
        onChange={handleChange}
      />{" "}
      <br />
      <button onClick={handleSubmit}>submit</button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}</strong>: {entry.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewForm;
