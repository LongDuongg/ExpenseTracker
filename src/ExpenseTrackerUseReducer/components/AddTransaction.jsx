import React, {useState, useContext, useEffect} from 'react'
import {setStateKey} from '../../common/react/setStateKey';
import { globalContext } from '../Context/GlobalState';

const AddTransaction = () => {

    const {state} = useContext(globalContext);
    const {addTransaction, updateTransaction} = useContext(globalContext);

    const [transaction, setTransaction] = useState({text: "", amount: 0});

    useEffect(() => {
      const selectedTransaction = state.editingId !== null && (
        state.transactions.find((transaction) => {
            return transaction.id === state.editingId
        })
      );
      setTransaction({
        text: selectedTransaction?.text || "",
        amount: selectedTransaction?.amount ?? 0,
      })
    }, [state.editingId, state.transactions]);

    const submit = () => {

      const newTransaction = {
        id: state.editingId || Date.now.toString(), 
        ...transaction,
      };

      state.editingId !== null ? updateTransaction(newTransaction) : addTransaction(newTransaction);
        
      setTransaction({text: "", amount: 0});
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <hr />
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
        </>
    )
}

export default AddTransaction
