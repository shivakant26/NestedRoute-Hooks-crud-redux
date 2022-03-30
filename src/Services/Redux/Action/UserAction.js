import { GET_DATA , DELET_DATA , EDIT_DATA , UPDATE_DATA} from "../ActionType";


export const Add_Employee = (info) =>{
    return{
        type:GET_DATA,
        payload:info
    }
}

export const Delete_Employee = (id) =>{
    return{
        type:DELET_DATA,
        payload:id
    }
}

export const Edit_Employee = (id) =>{
    return{
        type:EDIT_DATA,
        payload:id
    }
}

export const Update_Employee = (info,id) =>{
    return{
        type:UPDATE_DATA,
        payload:info,
        id:id
    }
}