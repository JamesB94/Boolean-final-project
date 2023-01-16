import './landingPage.css'
import toDoList from '../../images/toDoList.jpg'


const LandingPage = () => {


    return ( 
        <div className="landingpage">
        <div className="header">
            <div className="headerDoneNest">
                <h1>DoneNest</h1>
            </div>
        <span><button>Log in</button></span>
        </div>
        <div className="leftSideLanding">
            <div className="leftSideHeadingText">
            <h1>“There is only one way to eat an elephant:</h1>
            <br></br>
            <h1 style={{color:'#eb7f67'}}> a bite at a time.”</h1>
            <p>- Desmond Tutu</p>
            </div>
            <div className="callToActionLeft">
                <h3>Large goals can be daunting! Let us help you break yours down</h3>
                <h3>to easy bite sized todo's</h3>
            </div>
            <div className="joinUsButton">
                <button>Join us!</button>

            </div>

            
        </div>
        <div className="rightSideLanding">
            <img src={toDoList} alt="" />
            
        </div>
        </div>
     );
}
 
export default LandingPage;