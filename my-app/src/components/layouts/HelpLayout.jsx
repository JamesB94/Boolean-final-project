import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return ( 
        <div className="Help-Layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nostrum?</p>

            <nav>
                <NavLink to="faq"><button>View our FAQ </button> </NavLink>
                <NavLink to = "contact"> <button> Contact us </button></NavLink>
            </nav>

            <Outlet />

        </div>
     );
}
 
export default HelpLayout;