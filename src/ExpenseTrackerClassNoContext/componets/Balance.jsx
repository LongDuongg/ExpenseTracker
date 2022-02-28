import React, { Component } from 'react'
import IncomeExpense from './IncomeExpense'
import {sum} from '../../common/utils/collections'

export default class Balance extends Component {
  render() {

    const {transactions} = this.props;
    const amount = transactions.map((transaction) => (transaction.amount))
    const balance = sum(amount);

    return (
      <div className='balance-income'>
      <div className='balance'>
        <h3>Your Balance</h3>
        <p>${balance}</p>
      </div>
      <IncomeExpense transactions={transactions}/>  
      </div>
    )
  }
}
 