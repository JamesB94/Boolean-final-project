import { useLoaderData , Link} from 'react-router-dom';
import React, { useState , useRef} from 'react';

import './Goals.css'
// import React, { useState, useEffect } from 'react';

export default function Goals() {

  const qoutesData =[
    {id: 1, qoute:"If you don't know where you are going, you will probably end up somewhere else"},
    {id: 2, qoute: "Shoot for the moon. Even if you miss, you'll land among the stars."}
  ]

const data = useLoaderData()

const addGoalRef = useRef('null')

/////////////////////////////////////////////////////////

// Modal Box

const [isOpen, setIsOpen] = useState(false);

function handleOpen() {
  setIsOpen(true);
}

function handleClose() {
  setIsOpen(false);
}

////////////////////////////////////////////////////////

const handleGoalAdded = (event) => {
  event.preventDefault();
  const userInput = addGoalRef.current.value;
  const userTask = userInput
  

  const newGoal = {"id": data.length +1, "goalName": userTask, "done":false, "task": [{"id":1, "task": "First Milestone", "done": false,"nestedTask": []}]}
  data.push(newGoal)
  console.log("here is data", newGoal)
  handleClose()
  

}


    return ( 
        <div>
            <h1>this is a test for Goals page</h1>
            <div className="addGoal">

              <button onClick={handleOpen}>+</button>
              {isOpen && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="modal-inspiration">

                    </div>

                    <form onSubmit={handleGoalAdded}>
                    <input type="text"  ref={addGoalRef}/>
                    <button type="submit">Start your Journey</button>
                    </form>
                    <button onClick={handleClose}>x</button>
                  </div>
                </div>
              )}

            </div>
            {data.map(goal => (
              <Link to={goal.id.toString()} key={goal.id}>
                <h2>{goal.goalName}</h2>
              </Link>

            ))}
       

        </div>
     );
}
 


//Loader
export const goalLoader = async () => {
  const res = await fetch('http://localhost:8000/Goals')

  return res.json()
}




//////////////////////////////////////////////////

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:8000/Goals')
    //       .then(response => response.json())
    //       .then(data => setData(data)
    //         )
    //   },[]);

 {/* {data.map(item => (

        <div className='goalBox' key={item.id}>
        
            <p>{item.goalName}</p>
  
          
          
        </div>
      ))} */}