import { useLoaderData, useParams } from "react-router-dom";
import React, { useState, useRef  } from 'react';
import './GoalTask.css'

export default function GoalTasks() {

    const [tasksOpen, settasksOpen] = useState(false); 

    const inputRef = useRef('null');
    const nestetRef = useRef('null')

    const { id } = useParams()

    const data = useLoaderData()


    const addMileStone = (event) => {
        event.preventDefault();
        const userInput = inputRef.current.value;
        const userTask = userInput
        const tasks = data.task

        //console.log('here is data ' , tasks)
        const newObj = {"id":data.task.length+1,"task": userTask,"done": false, "nestedTask":[] }

        tasks.push(newObj)

        console.log('data has been pushed', data)
        //console.log('Here is the input ',newObj);
    }

    const addTask = (event) => {
        event.preventDefault();
        const userInput = nestetRef.current.value;
        const info = data.task

       // console.log(info)
        
        info.forEach(element => {
            let nestInfo = element.nestedTask
            nestInfo.map((item) => (
                console.log('here is the nested task' , item.nestedTask)
            ))
                
            //console.log('here is the nested task' , nestInfo)
        });


        

         //console.log('here is the nested task' , info )
    }

    //addMileStone()



  


    return ( 
        <div className="tasks">
            <h1> {data.goalName}</h1> 

            <div className="addAMilestone">
                <form onSubmit={addMileStone}>
                    <input 
                        type="text" ref={inputRef} name='addAMilestone'
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            


            <button onClick={() => settasksOpen(!tasksOpen)}>See all to Do's</button>
            
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
                    <form onSubmit={addTask}>
                    <input type="text" ref={nestetRef}/>
                    <button type="submit">+</button>
                    </form>
                    
                </div>
                
                
                </li>
        ))
    }
</ul>

    
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


        // {/* <ul>
        //     {
        //         data.task.map((value) => (
        //             <li key={value.id}>{value.task}</li>
        //         ))
                
        //     }
           
        // </ul>      */}
