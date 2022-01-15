import React, {useContext} from 'react'
import { Context } from '../context/GlobalContext';
import { Transaction } from './Transaction';

export const TransactionList = () => {

  const {state} = useContext(Context);
  const transactionList = state.searchText ? ( 
    state.transactions.filter((transaction) => {
    return transaction.text.toLowerCase().includes(state.searchText.toLowerCase())
  })) : (
    state.transactions
  )
  return (
    <ul className='list'>
      {transactionList.map((transaction) => {
        return (
          <Transaction key={transaction.id} transaction={transaction}/>
        )
      })}
    </ul>
  )
}
