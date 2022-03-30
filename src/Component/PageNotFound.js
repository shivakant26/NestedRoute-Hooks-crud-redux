import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PageNotFound = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },3000)
    },[])
    return(
        <div>
            <h2 className="error">!Oops 404 PageNotFound</h2>
            <p>Please wait 3 Seconds....</p>
        </div>
)
}

export default PageNotFound;