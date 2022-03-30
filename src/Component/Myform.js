import React, { useState } from "react";

const Myform = () =>{

    const [ username , setusername ] = useState();
    const [ password , setpassword ] = useState();
    const save = (e) => {
        e.preventDefault();
        const value = {username , password}
        console.log("value",value)
    }
    return(
        <div>
            <h1>Functional Component</h1>
            <form>
                <div className="form-field">
                <input type="text" 
                placeholder="Enter Name"
                // value={username}
                onChange={(e)=>setusername(e.target.value)}
                />
                </div>
                <div className="form-field">
                <input type="text" 
                placeholder="Enter Name"
                // value={password}
                onChange={(e)=>setpassword(e.target.value)}
                />
                </div>
                <div className="form-field">
                <button onClick={save}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Myform;