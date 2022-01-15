import React, {useContext} from 'react'
import {IncomeExpense} from './IcomeExpense';
import { Context } from '../context/GlobalContext';
import {sum} from '../../common/utils/collections';
export const Balance = () => {

  const {state} = useContext(Context);
  const amount = state.transactions.map((transaction) => {
    return transaction.amount
  });
  const balance = sum(amount);
  return (
    <div className='balance-income'>
      <div className='balance'>
        <h3>Your Balance</h3>
        <p>${balance}</p>
      </div>
      <IncomeExpense/>  
    </div>
  )
}
