import { useLoaderData, Link } from "react-router-dom";
import React, { useState, useRef } from "react";

import "./Goals.css";

export default function Goals() {
  const data = useLoaderData();

  const addGoalRef = useRef("null");

  // Modal Box

  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const handleGoalAdded = (event) => {
    event.preventDefault();
    const userInput = addGoalRef.current.value;
    const userTask = userInput;

    const newGoal = {
      id: data.length + 1,
      goalName: userTask,
      done: false,
      task: [{ id: 1, task: "First Milestone", done: false, nestedTask: [] }],
    };

    fetch("http://localhost:8000/Goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success: ", data))
      window.location.reload();
      handleClose();
  };

  return (
    <div className="Goals_Div">
      <div className="goalsHeader">
        <h1>Your Goals</h1>
      </div>
      <div className="allGoalPlus">
        <div className="addGoal">
          <h4>Add a Goal:</h4>
          <button id="addButton" onClick={handleOpen}>
            +
          </button>
          {isOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-inspiration"></div>
                <button className="closeBtn" onClick={handleClose}>
                  x
                </button>
                <form className="modalInput" onSubmit={handleGoalAdded}>
                  <input type="text" ref={addGoalRef} />
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="goalsList">
          <ul>
            {data.map((goal) => (
              <Link to={goal.id.toString()} key={goal.id}>
                <li>{goal.goalName}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Loader
export const goalLoader = async () => {
  const res = await fetch("http://localhost:8000/Goals");

  return res.json();
};