import React, { useState } from "react";


const UseState = () =>{

    
    const [ count , setCount ] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }
    const Decrease = () =>{
        setCount(count-1);
    } 


    return(
        <div>
            <h1>Example of useState Hooks</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
        </div>
    )
}

export default UseState;