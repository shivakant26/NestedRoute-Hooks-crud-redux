import React from "react";
import { Outlet } from "react-router-dom";

const AllPage = () =>{
    return(
        <div className="main-page">
            <h1>Main page</h1>
            <Outlet />
        </div>
    )
}


export default AllPage;