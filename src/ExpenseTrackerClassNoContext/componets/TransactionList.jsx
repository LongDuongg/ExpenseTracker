import React, { Component } from 'react'
import Transaction from './Transaction'

export default class TransactionList extends Component {
  render() {

    const {searchText, transactions, onDelete, onChoose} = this.props;
    const transactionList = searchText !== null ? (
      transactions.filter((transaction) => (
        transaction.text.toLowerCase().includes(searchText.toLowerCase())
      ))
    ) : (
      transactions
    )

    return (
      <ul className='list'> 
        {transactionList.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
            onChoose={onChoose}
          />
        ))}
      </ul>
    )
  }
}
