import React, { createContext, useState } from 'react'

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

export const Context = createContext(initialState);

export const GlobalContext = ({children}) => {

  const [state, setState] = useState(initialState);

  const addTransaction = (transaction) => {
    setState({
      ...state,
      transactions: [...state.transactions, transaction]
    });
  }

  const updateTransaction = (selectedTransaction) => {
    setState({
      ...state,
      transactions: state.transactions.map((transaction) => {
        return transaction.id === state.editingId ? selectedTransaction : transaction
      }),
      editingId: null
    });
  }

  const deleteTransaction = (id) => {
    setState({
      ...state,
      transactions: state.transactions.filter((transaction) => {
        return transaction.id !== id
      })
    });
  }

  const searchTransaction = (text) => {
    setState({
      ...state,
      searchText: text
    });
  }

  const chooseTransaction = (id) => {
    setState({
      ...state,
      editingId: id
    });
  }

  return (
    <Context.Provider value={{
      state,
      addTransaction,
      updateTransaction,
      deleteTransaction,
      searchTransaction,
      chooseTransaction
    }}>
      {children}
    </Context.Provider>
  )
}
