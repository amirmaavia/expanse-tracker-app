const TransactionReducer =  ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            return [action.payload , ...state]
        }
        default:
            return state;
    }
    switch(action.type){
        case "Delete_TRANSACTION": {
            return[action.payload, ...state]
        }
        default:
            return state;
    }
})

export default TransactionReducer;