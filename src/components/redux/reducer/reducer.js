
import data from "../../FakeData/data";
const initialState={
   bookList:data,
   addBook:[]
}

const bookReducer = (state=initialState,action) => {
switch(action.type){
    case "ADD_BOOK":{
        return state
    }
    case "REMOVE_BOOK":{
        return state
    }
    default:{
        return state
    }
}
} 

export default bookReducer;