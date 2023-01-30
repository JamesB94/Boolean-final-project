import "./landingPage.css";
import { useNavigate } from "react-router-dom";
import toDoList from "../../images/toDoList.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Goals");
  };

  return (
    <div className="landingpage">
      <div className="leftSideLanding">
        <div className="leftSideHeadingText">
          <h1>“There is only one way to eat an elephant:</h1>
          <br></br>
          <h1 style={{ color: "#ff595a" }}> a bite at a time.”</h1>
          <p>- Desmond Tutu</p>
        </div>
        <div className="callToActionLeft">
          <h3>Large goals can be daunting! Let us help you break yours down</h3>
          <h3>to easy bite sized todo's</h3>
        </div>
        <div className="joinUsButton">
          <button onClick={handleClick}>Start making Goals!</button>
        </div>
      </div>
      <div className="rightSideLanding">
        <img src={toDoList} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
