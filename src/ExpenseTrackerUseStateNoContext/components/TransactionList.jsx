import React from 'react';
import {Transaction} from './Transaction'

export const TransactionList = ({data, searchText, onDelete, onChoose}) => {

  const transactionList = searchText === null ? (
    data
  ) : (
    data.filter((d) => {
      return d.text.toLowerCase().includes(searchText.toLowerCase())
    }) 
  );

  return (
    <ul className='list'> 
      {transactionList.map((transaction) => {
        return (
          <Transaction 
            key={transaction.id} 
            transaction={transaction}
            onDelete={onDelete}
            onChoose={onChoose}
          />
        )
      })}
    </ul>
  );
};
