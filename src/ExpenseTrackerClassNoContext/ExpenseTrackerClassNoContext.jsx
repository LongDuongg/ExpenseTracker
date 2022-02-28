import React, { Component } from 'react'
import './ExpenseTrackerClassNoContext.css'
import Header from './componets/Header'
import Balance from './componets/Balance'
import SearchTransaction from './componets/SearchTransaction'
import AddTransaction from './componets/AddTransaction'
import TransactionList from './componets/TransactionList'

export default class ExpenseTrackerClassNoContext extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      transactions: [
        {id: "1", text: "Flower", amount: -20},
        {id: "2", text: "Salary", amount: 300},
        {id: "3", text: "Book", amount: -10},
        {id: "4", text: "Camera", amount: 150},
      ],
      searchText: null,
      editingID: null
    }
  }

  addTransaction = (newTransaction) => {
    this.setState({
      ...this.state,
      transactions: [newTransaction, ...this.state.transactions]
    })
  }

  updateTransaction = (updatedTransaction) => {
    this.setState({
      ...this.state,
      transactions: this.state.transactions.map((transaction) => (
        transaction.id === this.state.editingID ? updatedTransaction : transaction
      )),
      editingID: null
    })
  }

  deleteTransaction = (id) => {
    this.setState({
      ...this.state,
      transactions: this.state.transactions.filter((transaction) => (
        transaction.id !== id
      ))
    })
  }

  searchTransaction = (text) => {
    this.setState({
      ...this.state,
      searchText: text
    })
  }

  chooseTransaction = (id) => {
    this.setState({
      ...this.state,
      editingID: id
    })
  }

  render() {
    return (
      <div className='app'>
        <Header/>
        <Balance
          transactions={this.state.transactions}
        />
        <SearchTransaction
          searchText={this.state.searchText}
          onSearch={this.searchTransaction}
        />
        <TransactionList
          searchText={this.state.searchText}
          transactions={this.state.transactions}
          onDelete={this.deleteTransaction}
          onChoose={this.chooseTransaction}
        />
        <AddTransaction
          transactions={this.state.transactions}
          editingID={this.state.editingID}
          onAdd={this.addTransaction}
          onUpdate={this.updateTransaction}
        />
      </div>
    )
  }
}
