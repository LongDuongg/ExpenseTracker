import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ExpenseTrackerApp from './ExpenseTrackerUseReducer/ExpenseTrackerApp';
// import {ExpenseTrackerUseState} from './ExpenseTrackerUseState/ExpenseTrackerUseState';
// import ExpenseTrackerClassComponent from './ExpenseTrackerClassComponent/ExpenseTrackerClassComponent'
// import {ExpenseTrackerUseStateNoContext} from './ExpenseTrackerUseStateNoContext/ExpenseTrackerUseStateNoContext'
// import ExpenseTrackerClassNoContext from './ExpenseTrackerClassNoContext/ExpenseTrackerClassNoContext'
import {TestComponent} from './components/TestComponents';

ReactDOM.render(
  <React.StrictMode>
    {/* <ExpenseTrackerClassComponent/> */}
    {/* <ExpenseTrackerApp /> */}
    {/* <ExpenseTrackerUseState /> */}
    {/* <ExpenseTrackerUseStateNoContext/> */}
    {/* <ExpenseTrackerClassNoContext/> */}
    <TestComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);
