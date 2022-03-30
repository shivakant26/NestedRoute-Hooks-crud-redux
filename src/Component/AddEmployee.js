import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add_Employee, Update_Employee } from "../Services/Redux/Action/UserAction";

const AddEmployee = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[EmpCode , setEmpCode] = useState();
    const[EmpName , setEmpName] = useState();
    const[EmpAge , setEmpAge] = useState();
    const[EmpCompany , setEmpCompany] = useState();

    const Editable_data = useSelector((state)=>state.reducer.isEdit)
    const index = useSelector((state)=>state.reducer.id)

    const add = (e) => {
        e.preventDefault();
        var info = {EmpCode,EmpName,EmpAge,EmpCompany}
        if(Editable_data){
            dispatch(Update_Employee(info,index))
        }else{
        dispatch(Add_Employee(info));
        }
        navigate("../employeetable");
    }

    useEffect(()=>{
        console.log("Editable",Editable_data);
     
        setEmpCode(Editable_data?.EmpCode);
        setEmpName(Editable_data?.EmpName);
        setEmpAge(Editable_data?.EmpAge);
        setEmpCompany(Editable_data?.EmpCompany);

    },[Editable_data])

    return (
        <div>
            <h2>AddEmployee</h2>
            <form>
            <div className="form-inner">
                <div className="clearfix">
                    <div className="left">
                        <div className="form-field">
                            <input type="text" 
                            placeholder="Emp_Code"
                            value={EmpCode}
                            onChange={(e)=>setEmpCode(e.target.value)} 
                            />
                        </div>
                        <div className="form-field">
                            <input type="text"
                             placeholder="Emp_Name"
                             value={EmpName}
                             onChange={(e)=>setEmpName(e.target.value)}
                             />
                        </div>
                    </div>
                    <div className="right">
                        <div className="form-field">
                            <input type="text"
                             placeholder="Emp_Age"
                             value={EmpAge}
                             onChange={(e)=>setEmpAge(e.target.value)}
                             />
                        </div>
                        <div className="form-field">
                            <input type="text"
                             placeholder="Emp_Company"
                             value={EmpCompany} 
                             onChange={(e)=>setEmpCompany(e.target.value)}
                             />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-field">
                {
                    Editable_data ? 
                    <button className="add-btn" onClick={add}>UPDATE EMPLOYEE</button> 
                    :
                    <button className="add-btn" onClick={add}>ADD EMPLOYEE</button> 
                }
                
            </div>
        </form>
        </div>
    )
}

export default AddEmployee;