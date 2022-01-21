import React, { Component } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { DBContext } from '../Context/Globaldata';

export default class Transaction extends Component {

  static contextType = DBContext;

  render() {

    const {chooseTransaction, deleteTransaction} = this.context
    const {transaction} = this.props;
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
      <div className='item' 
        style={{
          borderRight: `3px solid ${transaction.amount < 0 ? 'red' : 'green'}`
        }}
      >
        <h3>{transaction.text}</h3> 
        <span 
          style={{
            fontSize: '18px', 
            color: transaction.amount < 0 ? 'red' : 'green' 
          }}
        > 

          {sign}${Math.abs(transaction.amount)}
          
          <FaEdit 
            style={{
              color: 'blue',
              cursor: 'pointer',
              margin: 'auto 20px'  
            }}
            onClick={() => chooseTransaction(transaction.id)}
          />
          <FaTimes 
            style={{
              color: 'red',
              cursor: 'pointer'
            }}
            onClick={() => deleteTransaction(transaction.id)}
          />
        </span>
      </div>
    )
  }
}
 