import React, { Component } from 'react'
import AddForm from './components/AddForm';
import Balance from './components/Balance';
import Header from './components/Header';
import SearchTransaction from './components/SearchTransaction';
import TransactionList from './components/TransactionList';
import Globaldata from './Context/Globaldata';
import './ExpenseTrackerClassComponent.css';

export default class ExpenseTrackerClassComponent extends Component {
  render() {
    return (
      <Globaldata>
        <div className='app'>
          <Header/> 
          <Balance/>
          <SearchTransaction/>
          <TransactionList/>
          <AddForm/>
        </div>
      </Globaldata>
    )
  }
}
