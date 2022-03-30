import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReduxComponent = () =>{
  
    return(
        <div className="redux-example">
            <h2>Redux component </h2>
            <Link to="./container/employeetable">EmployeeTable</Link>
            <Link to="./container/addemployee">AddEmployee</Link>
            <Outlet/>
        </div>
    )
}

export default ReduxComponent;