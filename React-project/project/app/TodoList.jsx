"use client";
import React, { useState } from "react";

const TodoList = () => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback , setSubmittedFeedback] = useState([])

  const handleChange=(event)=>{
    setFeedback(event.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    // alert(`Thanks for your Feedback : ${feedback}`)
    // setSubmittedFeedback(feedback)
    const newList = submittedFeedback.concat(feedback)
    setSubmittedFeedback(newList);
    setFeedback('')
  }
  return (
    <div>
      <textarea value={feedback} onChange={handleChange}></textarea> <br />
      <button onClick={handleSubmit}>submit</button>
      {/* <p>{submittedFeedback}</p> */}
      <ol>
          {submittedFeedback.map((item , index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ol>
    </div>
  );
};

export default TodoList;
