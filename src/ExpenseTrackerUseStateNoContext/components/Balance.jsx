import React from 'react';
import {IncomeExpense} from './IncomeExpense'
import {sum} from '../../common/utils/collections'
export const Balance = ({balance}) => {

  const amount = sum(balance.map((b) => {
    return b.amount
  }));

  return (
    <div className='balance-income'>
    <div className='balance'>
      <h3>Your Balance</h3>
      <p>${amount}</p>
    </div>
    <IncomeExpense balance={balance}/>  
    </div>
  );
};
 