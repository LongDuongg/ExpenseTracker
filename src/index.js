import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpenseTrackerApp from './ExpenseTrackerUseReducer/ExpenseTrackerApp';
import reportWebVitals from './reportWebVitals';
import {ExpenseTrackerUseState} from './ExpenseTrackerUseState/ExpenseTrackerUseState';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseTrackerApp />
    {/* <ExpenseTrackerUseState /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
