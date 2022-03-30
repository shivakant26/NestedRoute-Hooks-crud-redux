import React from "react";

class MyClassForm extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            email:""
        }
    }

   Save(e){
       e.preventDefault();
       console.log("value",this.state)
    }
    render(){
        return(
            <div>
                <h1>Class Component</h1>
                <form>
                <div className="form-field">
                <input type="text" 
                placeholder="Enter Name"
                onChange={(e)=>{this.setState({username:e.target.value})}}
                />
                </div>
                <div className="form-field">
                <input type="text" 
                placeholder="Enter Name"
                onChange={(e)=>{this.setState({email:e.target.value})}}
                />
                </div>
                <div className="form-field">
                <button onClick={(e) => this.Save(e)}>Submit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default MyClassForm;