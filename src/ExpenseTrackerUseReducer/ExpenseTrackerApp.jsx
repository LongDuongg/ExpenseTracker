import './ExpenseTrackerApp.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import SearchTransaction from './components/SearchTransaction';
import TransactionList from './components/TransactionList';
import GlobalProvider from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header title="Expense Tracker"/>
      <div className="container">
        <Balance title="Your Balance"/>
        <IncomeExpenses/>
        <SearchTransaction/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
