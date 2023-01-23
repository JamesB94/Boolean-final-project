import { useLoaderData, useParams } from "react-router-dom";
import './GoalTask.css'

export default function GoalTasks() {

    const { id } = useParams()

    const data = useLoaderData()

    const tasks = () => {

        data.task.map((value) => {
            value.nestedTask.map((task) => {
                console.log(task)
            })
            // console.log(value.nestedTask)
            
        })

        // data.task.forEach((i) => {
        //     console.log('task function ', i.task)
        //     return i.task
        // })
    }

   tasks()

    //console.log('here is a test ', data)

    // console.log("here is data array ", data.task[0].task)

    // console.log('here is a test ', data.task[0].nestedTask)

    return ( 
        <div className="tasks">
            <h1>Goal: {data.goalName}</h1>

        <ul>
            {
                data.task.map((value) => (
                    <li key={value.id}>{value.task}</li>
                ))
            }
        </ul>


            {/* <p>{data.task[0].task}</p> */}
            

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