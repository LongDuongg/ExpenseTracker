import React from 'react';
import {FaTimes, FaEdit} from 'react-icons/fa'
export const Transaction = ({transaction, onDelete, onChoose}) => {

  const sign = transaction.amount > 0 ? '+' : '-';

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
  );
};
