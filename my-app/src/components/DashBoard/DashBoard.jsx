import './DashBoard.css'
import React, { useState, useEffect } from 'react';

const DashBoard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/goals')
          .then(response => response.json())
          .then(data => setData(data)
            )
      },[]);

    return ( 
        <div>
            <h1>Test</h1>
            
        {data.map(item => (

        <div className='goalBox' key={item.id}>
        
            <p>{item.goalName}</p>
  
          
          
        </div>
      ))}

        </div>
     );
}
 
export default DashBoard;