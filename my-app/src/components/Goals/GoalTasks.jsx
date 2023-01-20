import { useLoaderData, useParams } from "react-router-dom";

export default function GoalTasks() {

    const { id } = useParams()

    const data = useLoaderData()

    console.log('here is a test ', data)

    return ( 
        <div className="tasks">
            <h1>Goal: {data.goalName}</h1>
            <p>{data.task}</p>
            

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