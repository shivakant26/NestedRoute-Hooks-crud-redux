import { GET_DATA , DELET_DATA ,EDIT_DATA , UPDATE_DATA} from "../ActionType";

const initialState ={
    data:[]
}


const reducer = (state = initialState ,action) =>{
    console.log("action",action);
    switch(action.type){
        case GET_DATA :
            const list = state.data;
            list.push(action.payload)
            return{
                
                ...state,
                isEdit:null,
                data:[...list]
            }
            break;

            case DELET_DATA :
            const Delete_list = state.data;
            Delete_list.splice(action.payload,1)
            return{
                
                ...state,
                data:[...Delete_list]
            }
            break;

            case EDIT_DATA :
            const Edit_list = state.data;
            const object = Edit_list[action.payload]
            debugger
            return{
                ...state,
                isEdit:object,
                id:action.payload
                
            }
            break;

            case UPDATE_DATA :
            var update_list = state.data;
            update_list.splice(action.id,1,{
                EmpCode:action.payload.EmpCode,
                EmpName:action.payload.EmpName,
                EmpAge:action.payload.EmpAge,
                EmpCompany:action.payload.EmpCompany
            })
            debugger;
            return{
                ...state,
                isEdit:null,
                data:[...update_list]
                
            }
            break;
            
            default:
                return state
    }

}

export default reducer;