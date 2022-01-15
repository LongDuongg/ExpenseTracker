import './ExpenseTrackerUseState.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalContext } from './context/GlobalContext';
import { SearchTransaction } from './components/SearchTransaction';

export const ExpenseTrackerUseState = () => {
  return (
    <GlobalContext>
      <div className='app'>
        <Header/>
        <Balance/>
        <SearchTransaction/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalContext>
  )
}
