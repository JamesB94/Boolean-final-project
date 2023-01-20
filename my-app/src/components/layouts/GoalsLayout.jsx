import { Outlet } from "react-router-dom";

export default function GoalsLayout() {
    return (
        <div className="goals_layout">
            <h2>Goals</h2>
            <Outlet />
        </div>
       
    )
}