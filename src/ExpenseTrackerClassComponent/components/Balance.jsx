import React, { Component } from 'react'
import IncomeExpense from './IncomeExpense'
import { DBContext } from '../Context/Globaldata'
import { sum } from '../../common/utils/collections';
export default class Balance extends Component {

  static contextType = DBContext;

  render() {

    const {state} = this.context;
    const amount = state.transactions.map((transaction) => {
      return transaction.amount
    });
    const balance = sum(amount);
    return (
      <div className='balance-income'>
        <div className='balance'>
          <h2>Your Balance</h2>
          <p>${balance}</p>
        </div>
        <IncomeExpense/>
      </div>
    )
  }
}
