import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpenseTrackerApp from './ExpenseTrackerUseReducer/ExpenseTrackerApp';
import reportWebVitals from './reportWebVitals';
import {ExpenseTrackerUseState} from './ExpenseTrackerUseState/ExpenseTrackerUseState';
import ExpenseTrackerClassComponent from './ExpenseTrackerClassComponent/ExpenseTrackerClassComponent'
import {ExpenseTrackerUseStateNoContext} from './ExpenseTrackerUseStateNoContext/ExpenseTrackerUseStateNoContext'
import ExpenseTrackerClassNoContext from './ExpenseTrackerClassNoContext/ExpenseTrackerClassNoContext'
ReactDOM.render(
  <React.StrictMode>
    {/* <ExpenseTrackerClassComponent/> */}
    {/* <ExpenseTrackerApp /> */}
    {/* <ExpenseTrackerUseState /> */}
    {/* <ExpenseTrackerUseStateNoContext/> */}
    <ExpenseTrackerClassNoContext/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
