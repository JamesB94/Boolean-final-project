import { useLoaderData , Link} from 'react-router-dom';
import './Goals.css'
// import React, { useState, useEffect } from 'react';

export default function Goals() {

const data = useLoaderData()




    return ( 
        <div>
            
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