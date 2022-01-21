import React, {useState, useContext, useEffect} from 'react'
import {Context} from '../context/GlobalContext';
import {setStateKey} from '../../common/react/setStateKey';
export const AddTransaction = () => {

  const [transaction, setTransaction] = useState({text: '', amount: 0});
  const {state, addTransaction, updateTransaction} = useContext(Context);

  useEffect(() => {
    const selectedTransaction = state.editingId !== null && (
      state.transactions.find((t) => {
        return t.id === state.editingId
      })
    )
    setTransaction({
      text: selectedTransaction?.text || '',
      amount: selectedTransaction?.amount ?? 0
    });
  }, [state.editingId, state.transactions])

  const submit = () => {
    
    const newTransaction = {
      id: state.editingId || Date.now.toString(),
      ...transaction
    };

    state.editingId !== null ? (
      updateTransaction(newTransaction)
    ) : (
      addTransaction(newTransaction)
    );

    setTransaction({text: '', amount: 0});
  }
  return (
    <div className='add-form'>
      <div className='form-control'>
        <label htmlFor="text">Text</label>
        <input 
          value={transaction.text} 
          onChange={(e) => setStateKey(transaction, setTransaction, "text", e.target.value)} 
          placeholder='Enter Text...'
        />
      </div>
      <div className='form-control'>
        <label htmlFor="amount">
            Amount <br/>
            (negative - expense, positive - income)
        </label>
        <input 
          type="number" 
          value={transaction.amount} 
          onChange={(e) => setStateKey(transaction, setTransaction, "amount", +e.target.value)} 
          placeholder='Enter Amount...'
        />
      </div>
      <button onClick={() => submit()} className='btn'>
          Add transaction
      </button>
    </div>
  )
}
