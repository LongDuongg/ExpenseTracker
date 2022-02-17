 import React from 'react';
 import {sum} from '../../common/utils/collections'
 export const IncomeExpense = ({balance}) => {

  const amount = balance.map((b) => {
    return b.amount
  })  

  const income = sum(amount.filter((a) => {
    return a > 0
  }));

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
        <p>${expense}</p>
      </div>
    </div>
  );
 }
 