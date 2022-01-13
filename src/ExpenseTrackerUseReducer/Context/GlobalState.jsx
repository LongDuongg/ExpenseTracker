import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id: "1", text: "Flower", amount: -20},
        {id: "2", text: "Salary", amount: 300},
        {id: "3", text: "Book", amount: -10},
        {id: "4", text: "Camera", amount: 150},
    ],
    searchText: '',
    editingId: null 
};

export const globalContext = createContext(initialState);

const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState); 

    const deleteTransaction = (id) => { 
        dispatch({
            type: "delete",
            payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: "add",
            payload: transaction
        });
    }

    const searchTransaction = (value) => {
        dispatch({
            type: "textInput",
            payload: {
                key: 'searchText',
                value: value
            }
        });
    }

    const updateTransaction = (transaction) => {
        dispatch({
            type: "update",
            payload: transaction
        });
    }

    const chooseTransaction = (id) => {
        dispatch({
            type: "choose",
            payload: {
                key: 'editingId',
                value: id
            }
        });
    }   

    return (
        <globalContext.Provider value={{
            state,
            searchTransaction,
            deleteTransaction,
            addTransaction,
            chooseTransaction,
            updateTransaction,
        }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalProvider
