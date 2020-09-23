import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';


const initialTransactions = [
]

const transContext = createContext(initialTransactions);
export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    

    function addTransaction (transObj) {
        dispatch ({
            type: "Add" ,
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return (
        <transContext.Provider value={{
            transactions: state,
            addTransaction
            
        }}>
            {children}
        </transContext.Provider>
    )
}


export default transContext;