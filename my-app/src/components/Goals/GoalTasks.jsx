import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from 'react';
import './GoalTask.css'

export default function GoalTasks() {

    const [tasksOpen, settasksOpen] = useState(false); 

    const { id } = useParams()

    const data = useLoaderData()

    // const nestedData = [].concat(...data.task.map(value => value.nestedTask));

    // const nestedData = data.task.map((value) => {
    //     console.log('this is the first task', value.task)
    //     return value.nestedTask.map((task) => {
    //         console.log('this is the nested data', task.nestedTask) 
    //     })
        
    // })
    
    //  console.log('this is a nested test', nestedData);


  
//     const nestedData = data.task.map((value) => {
//         return value.nestedTask.map((task) => task)
// });

   

//     console.log('this is a nested test', nestedData )


    return ( 
        <div className="tasks">
            <h1> {data.goalName}</h1> 
            <button onClick={() => settasksOpen(!tasksOpen)}>See all to Do's</button>
            <button>Add a Milestone</button>
            {/* Goal.css to change Goal color */}
        
        <ul>

        {
            data.task.map((value) => (
                <li key={value.id}>  
                <div className="mileStones">
                    {value.task}
                    </div>      
                    
                <div className={`collapsable-content ${tasksOpen ? 'open' : ''}`}>
                    {
                        value.nestedTask.map((task) => (
                            // key={`${value.id}-${task.nestedId}`}
                            <ul key={task.nestedId}>
                                <li>{task.nestedTask}</li>
                            </ul>
                        ))
                    }
                </div>
                
                
                </li>
        ))
    }
</ul>

        




        {/* <ul>
            {
                data.task.map((value) => (
                    <li key={value.id}>{value.task}</li>
                ))
                
            }
           
        </ul>      */}

        </div>

     );
}
 
// export default GoalTasks;


//loader 
export const goalTasksLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch ('http://localhost:8000/Goals/' + id)

    return res.json()

}




  // tasks()

    //console.log('here is a test ', data)

    // console.log("here is data array ", data.task[0].task)

    // console.log('here is a test ', data.task[0].nestedTask)


     // const nestedData = data.task.map((value) => {
    //     value.nestedTask.map((task) => {
    //         return task
    //     })
        
    // })



      // nestedData.map((nestedValue) => (
                    //     <li key={nestedValue.nestedId}>{nestedData}</li>
                    // ))