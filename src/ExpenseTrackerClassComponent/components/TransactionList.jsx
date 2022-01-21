import React, { Component } from 'react'
import Transaction from './Transaction'
import {DBContext} from '../Context/Globaldata'

export default class TransactionList extends Component {

  static contextType = DBContext;

  render() {
    
    const {state} = this.context;
    //console.log('editingID : ',state.editingId)
    //console.log('transaction : ',state.transaction)
    const transactionList = state.searchText ? (
      state.transactions.filter((transaction) => {
        return transaction.text.toLowerCase().includes(state.searchText.toLowerCase())
      }) 
    ) : (
      state.transactions
    )
    return (
      <div className='list'>
        {transactionList.map((transaction) => {
          return (
            <Transaction key={transaction.id} transaction={transaction}/>
          )
        })}
      </div>
    )
  }
}
  