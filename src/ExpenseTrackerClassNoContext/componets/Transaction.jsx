import React, { Component } from 'react'
import {FaEdit, FaTimes} from 'react-icons/fa'

export default class Transaction extends Component {
  render() {

    const {transaction, onDelete, onChoose} = this.props;
    const sign = transaction.amount > 0 ? '+' : '-'

    return (
      <li className='item'>
        {transaction.text} 
        <span style={{color: `${transaction.amount > 0 ? 'green' : 'red'}`}}>
          {sign}${Math.abs(transaction.amount)}
          <FaEdit 
            style={{
              color: 'blue', 
              cursor: 'pointer', 
              margin: '0px 20px'
            }}
            onClick={() => onChoose(transaction.id)}
          />
          <FaTimes 
            style={{
              color: 'red', 
              cursor: 'pointer'
            }}
            onClick={() => onDelete(transaction.id)}
          />
        </span>
      </li>
    )
  }
}
