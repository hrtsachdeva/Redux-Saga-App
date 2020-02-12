const initialState ={
    a:1
}

const myReducre = (state=initialState, action)=>{
    if(action.type ==="ADD_ASYNC"){
        console.log("in reducer");
     state ={
         ...state,
         a:state.a+1
     }
     console.log(JSON.stringify(state));
    }
    if (action.type ==="SUB"){
        state ={
            ...state,
            a:state.a-1
        }
    }
    return state ;
};

export default myReducre;



