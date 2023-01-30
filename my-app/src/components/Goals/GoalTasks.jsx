import { useLoaderData, useParams, useLocation } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

import "./GoalTask.css";

export default function GoalTasks() {
  const [data2, setData2] = useState({});

  const [tasksOpen, settasksOpen] = useState(false);

  const [pageId, setPageId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const id = pathname.split("/")[2];
    setPageId(id);
  }, [location]);

  const inputRef = useRef("null");
  const nestetRef = useRef("null");

  const { id } = useParams();

  const data = useLoaderData();

  const addMileStone = (event) => {
    // event.preventDefault();
    const userInput = inputRef.current.value;
    const userTask = userInput;
    const newObj = {
      id: data.task ? data.task.length + 1 : 1,
      task: userTask,
      done: false,
      nestedTask: [],
    };
    fetch(`http://localhost:8000/Goals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: [...data.task, newObj] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload();
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:8000/Goals/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
        console.log("Success:", data);
        window.location.href = "http://localhost:3000/";
        // window.location.reload();
      })
  };

  const deleteTask = (taskId) => {
    const updatedTasks = data.task.filter((task) => task.id !== taskId);
    fetch(`http://localhost:8000/Goals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: updatedTasks }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
        console.log("Success:", data);
        window.location.reload();
      })
  };

  const addTask = (event, info, taskId) => {
    event.preventDefault();
    const userInput = nestetRef.current.value;

    const task = info.task.find((task) => task.id === taskId);
    task.nestedTask.push({
      id: task.nestedTask.length + 1,
      task: userInput,
      done: false,
    });

    fetch(`http://localhost:8000/Goals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: info.task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
        console.log("Success:", data);
      })
    window.location.reload();
  };

  return (
    <div className="tasks">
      <div className="goalHeading">
        <h1> {data.goalName}</h1>
        <button onClick={() => deleteGoal(id)}>Delete Goal</button>
      </div>

      <div className="allMilestones">
        <button className="seeToDos" onClick={() => settasksOpen(!tasksOpen)}>
          See all to Do's
        </button>

        <div className="addAMilestone">
          <form onSubmit={addMileStone}>
            <input
              placeholder="Add a Milestone here"
              type="text"
              ref={inputRef}
              name="addAMilestone"
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <ul>
          {data.task.map((value) => (
            <li key={value.id}>
              <div className="mileStones">
                <h2>{value.task} </h2>
                <button onClick={() => deleteTask(value.id)}>DELETE</button>
                {/* <button onClick={markAsComplete}>Done</button> */}
              </div>

              <div className={`collapsable-content ${tasksOpen ? "open" : ""}`}>
                {value.nestedTask.map((task) => (
                  // key={`${value.id}-${task.nestedId}`}
                  <ul key={task.nestedId}>
                    <li>{task.nestedTask}</li>
                  </ul>
                ))}
                <form onSubmit={addTask}>
                  <input type="text" ref={nestetRef} />
                  <button type="submit">+</button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// export default GoalTasks;

//loader
export const goalTasksLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:8000/Goals/" + id);

  return res.json();
};
