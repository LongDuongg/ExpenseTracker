import React, {Fragment, useState, useContext} from 'react'
import { globalContext } from '../Context/GlobalState';

const AddTransaction = () => {

    const {state} = useContext(globalContext);
    const {addTransaction, updateTransaction} = useContext(globalContext);

    const selectedTransaction = state.editingId !== null && (
        state.transactions.find((transaction) => {
            return transaction.id === state.editingId
        })
    );
    //console.log(selectedTransaction);

    const [text, setText] = useState(null || selectedTransaction.text);
    const [amount, setAmount] = useState(null || selectedTransaction.amount);

    const submit = (e) => {
        e.preventDefault();

        if(state.editingId !== null) {
            const newTransaction = {
                id: state.editingId, 
                text: text, 
                amount: +amount
            };
            updateTransaction(newTransaction);
        } else {
            const newTransaction = {
                id: Date.now.toString(), 
                text: text, 
                amount: +amount
            };
            addTransaction(newTransaction);
        }
        
        setText("");
        setAmount(0);
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <hr />
            <div className='add-form'>
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} placeholder='Enter Text...'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount...'
                    />
                </div>
                <button onClick={(e) => submit(e)} className='btn'>Add transaction</button>
            </div>
        </Fragment>
    )
}

export default AddTransaction
