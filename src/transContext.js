import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
    // { amount: 500, desc: "Cash" },
    // { amount: -50, desc: "Cold Drink" },
    // { amount: 100, desc: "Deposit" },
    // { amount: -200, desc: "Utility Bill" },

]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                 
                amount: transObj.amount, 
                desc: transObj.desc,
                id: Math.floor(Math.random()*100000)
            },
        })
    }
    function deleteTransactions(transId){
        dispatch({
            type: "DELETE_TRANSACTION",
            id: transId
        })
    }
   
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}