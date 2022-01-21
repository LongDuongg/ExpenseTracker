import React, { Component, createContext } from 'react'

const initialState = {
  transactions: [
    {id: "1", text: "Flower", amount: -20},
    {id: "2", text: "Salary", amount: 300},
    {id: "3", text: "Book", amount: -10},
    {id: "4", text: "Camera", amount: 150},
  ],
  transaction:'',
  searchText: '',
  editingId: null 
};

export const DBContext = createContext(initialState);
export const Consumer = DBContext.Consumer;
export default class Globaldata extends Component {

  constructor(props) {
    super(props)
  
    this.state = initialState
  }
  
  addTransaction = (newTransaction) => {
    this.setState({
      ...this.state,
      transactions: [...this.state.transactions, newTransaction]
    });
  }

  updateTransaction = (newTransaction) => {
    this.setState({
      ...this.state,
      transactions: this.state.transactions.map((transaction) => {
        return transaction.id === this.state.editingId ? newTransaction : transaction
      }),
      transaction:'',
      editingId: null
    });
  }

  chooseTransaction = (id) => {
    this.setState({
      ...this.state,
      transaction: this.state.transactions.find((transaction) => {
        return transaction.id === id
      }),
      editingId: id
    });
  }

  deleteTransaction = (id) => {
    this.setState({
      ...this.state,
      transactions: this.state.transactions.filter((transaction) => {
        return transaction.id !== id
      })
    });
  }

  searchTransaction = (text) => {
    this.setState({
      ...this.state,
      searchText: text
    });
  }

  render() {

    const {children} = this.props;
    const {state} = this;
    const {addTransaction, updateTransaction, chooseTransaction, deleteTransaction, searchTransaction} = this;

    return (
      <DBContext.Provider value ={{
        state,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        searchTransaction,
        chooseTransaction
      }}>
        {children}
      </DBContext.Provider>
    )
  }
}
