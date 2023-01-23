import React, { useState } from 'react';
import './Faq.css'

const Faq = () => {

const [isOpen, setIsOpen] = useState(false); 

let car = 'Hello there i am a car'     


    return ( 

        <div>
            <h1>FAQ Here</h1>
            <button onClick={() => setIsOpen(!isOpen)}>
            <div className = "buttonStyle"> 
            <p>Collapsable</p>
            <p>+</p>
            </div>
            </button>
            <div className={`collapsable-content ${isOpen ? 'open' : ''}`}>
                {car}
            </div>
        </div>
        
     );
}
 
export default Faq;