import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Delete_Employee, Edit_Employee } from "../Services/Redux/Action/UserAction";

const EmployeeTable = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.reducer.data);
    const emp_list = list[0];
    console.log("data",emp_list);

    const Delete = (i) =>{
        dispatch(Delete_Employee(i));  
    }
    const Edit = (i) =>{
        dispatch(Edit_Employee(i))
        navigate(`../addemployee/${i}`)
    }
    return(
        <div>
            <h2>Employee Table</h2>
            <div className="show-list">
                {
                    list ? 
                    <div>
                        
                                {
                                    list.map((item,i)=>
                                    <div className="card" key={i}>
                                        <div className="Emp_code">
                                            <div className="clearfix">
                                                <div className="left">
                                                    <p><strong>Emp_Code : </strong></p>
                                                </div>
                                                <div className="right">
                                                    <p>{item.EmpCode}</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="Emp_name">
                                            <div className="clearfix">
                                                <div className="left">
                                                    <p><strong>Emp_Name : </strong></p>
                                                </div>
                                                <div className="right">
                                                    <p>{item.EmpName}</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="Emp_age">
                                        <div className="clearfix">
                                                <div className="left">
                                                <p><strong>Emp_Age : </strong></p>
                                                </div>
                                                <div className="right">
                                                <p>{item.EmpAge}</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="Emp_company">
                                        <div className="clearfix">
                                                <div className="left">
                                                    <p><strong>Emp_Company : </strong></p>
                                                </div>
                                                <div className="right">
                                                    <p>{item.EmpCompany}</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div className="card_footer">
                                            <div className="clearfix">
                                                <div className="left">
                                                    <button className="edit_btn" onClick={()=>Edit(i)}>Edit</button>
                                                </div>
                                                <div className="right">
                                                    <button className="delete_btn" onClick={()=>Delete(i)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                            
                    </div>
                    :
                    <div>
                        <p className="error">Record Not Found</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default EmployeeTable;