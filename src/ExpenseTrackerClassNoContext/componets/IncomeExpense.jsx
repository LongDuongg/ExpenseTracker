import React, { Component } from 'react'
import {sum} from '../../common/utils/collections'

export default class IncomeExpense extends Component {
  render() {

    const {transactions} = this.props;
    const amount = transactions.map((transaction) => (transaction.amount));
    const income = sum(amount.filter((a) => (a > 0)))
    const expense = sum(amount.filter((a) => (a < 0)))

    return (
      <div className='inc-exp-tracker'>
        <div className='money plus'>
          <h4>Income</h4>
          <p>${income}</p>
        </div>
        <div className='money minus'>
          <h4>Expense</h4>
          <p>-${Math.abs(expense)}</p>
        </div>
      </div>
    )
  }
}
