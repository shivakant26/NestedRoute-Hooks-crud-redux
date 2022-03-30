import React from "react";
import { Outlet } from "react-router-dom";

const Container = () =>{
    return(
        <div className="inner-page"> 
            <h2>Container page</h2>
            <Outlet />
        </div>
    )
}

export default Container;