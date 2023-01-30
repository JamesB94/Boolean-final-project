import { NavLink, Outlet } from "react-router-dom";
import "./HelpLayout.css";

const HelpLayout = () => {
  return (
    <div className="Help-Layout">
      <h2>Website Help</h2>
      <p>need some help ? Check out our FAQ or contact us</p>
      <nav>
        <NavLink to="faq">
          <button className="FAQbt">View our FAQ </button>{" "}
        </NavLink>
        <NavLink to="contact">
          {" "}
          <button className="contact"> Contact us </button>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
