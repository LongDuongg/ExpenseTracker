import React, { useContext } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa';
import { Context } from '../context/GlobalContext';
export const Transaction = ({transaction}) => {

  const {chooseTransaction, deleteTransaction} = useContext(Context);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className='item'>
      {transaction.text} 
      <span>
        {sign}${Math.abs(transaction.amount)}
        <FaEdit 
          style={{
            color: 'blue', 
            cursor: 'pointer', 
            margin: '0px 20px'
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
    </li>
  )
}
