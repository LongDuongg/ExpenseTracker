import React, { Component } from 'react'
import {DBContext} from '../Context/Globaldata'
import {sum} from '../../common/utils/collections'

export default class IncomeExpense extends Component {

  static contextType = DBContext;

  render() {

    const {state} = this.context;
    const amount = state.transactions.map((transaction) => {
      return transaction.amount
    });
    const income = sum(amount.filter((a) => {
      return a > 0
    }));
    const expense = sum((amount.filter((a) => {
      return a < 0
    })))

    return (
      <div className='income'>
        <div className='money plus'>
          <h2>Income</h2>
          <p>${income}</p>
        </div>
        <div className='money minus'>
          <h2>Expense</h2>
          <p>${expense}</p>
        </div>
      </div>
    )
  }
}
