import React, {useContext} from 'react' 
import {sum} from '../../common/utils/collections';
import { Context } from '../context/GlobalContext';

export const IncomeExpense = () => {

  const {state} = useContext(Context);
  const amount = state.transactions.map((transaction) => {
    return transaction.amount
  });
  
  const income = sum(amount.filter((a) => {
    return a > 0
  }))
  const expense = sum(amount.filter((a) => {
    return a < 0
  }))


  return (
    <div className='inc-exp-tracker'>
      <div className='money plus'>
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div className='money minus'>
        <h4>Expense</h4>
        <p>${Math.abs(expense)}</p>
      </div>
    </div>
  )
}
