import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./RootLayout.css"



const RootLayout = () => {
    return ( 
        
    <div className="root-layout">

    <header >  
        <NavBar />   
    </header>

    <main>
       <Outlet /> 
    </main>
    </div>

     );
}
 
export default RootLayout;