import React, {useState} from 'react';
import './ExpenseTrackerUseStateNoContext.css'
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import { SearchTransaction } from './components/SearchTransaction';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
export const ExpenseTrackerUseStateNoContext = () => {

  const [data, setData] = useState({
    transactions: [
      {id: "1", text: "Flower", amount: -20},
      {id: "2", text: "Salary", amount: 300},
      {id: "3", text: "Book", amount: -10},
      {id: "4", text: "Camera", amount: 150},
    ],
    searchText: null,
    editingID: null
  });

  const addTransaction = (transaction) => {
    setData({
      ...data,
      transactions: [transaction, ...data.transactions]
    });
  }

  const chooseTransaction = (id) => {
    setData({
      ...data,
      editingID: id
    })
  }

  const updateTransaction = (updatedTransaction) => {
    setData({
      ...data,
      transactions: data.transactions.map((transaction) => {
        return transaction.id === data.editingID ? updatedTransaction : transaction
      }),
      editingID: null
    })
  }

  const deleteTransaction = (id) => {
    setData({
      ...data,
      transactions: data.transactions.filter((transaction) => {
        return transaction.id !== id
      })
    }); 
  }

  const searchTransaction = (text) => {
    setData({
      ...data,
      searchText: text
    });
  }

  return (
    <div className='app'>
      <Header/>
      <Balance balance={data.transactions}/>
      <SearchTransaction 
        searchText={data.searchText} 
        onSearch={searchTransaction}
      />
      <TransactionList 
        data={data.transactions} 
        searchText={data.searchText}
        onDelete={deleteTransaction}
        onChoose={chooseTransaction}
      />
      <AddTransaction
        transactions={data.transactions}
        editingID={data.editingID}
        onAdd={addTransaction}
        onUpdate={updateTransaction}
      />
    </div>
  );
};
