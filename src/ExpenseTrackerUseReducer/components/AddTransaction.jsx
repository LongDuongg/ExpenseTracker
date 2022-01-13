import React, {Fragment, useState, useContext} from 'react'
import { globalContext } from '../Context/GlobalState';

const AddTransaction = () => {

    const {state} = useContext(globalContext);
    const {addTransaction, updateTransaction} = useContext(globalContext);

<<<<<<< HEAD
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

=======
>>>>>>> 4f27201261182da76d51aa362641c6873262d84f
    const selectedTransaction = state.editingId !== null && (
        state.transactions.find((transaction) => {
            return transaction.id === state.editingId
        })
    );
<<<<<<< HEAD

    const bindingData = selectedTransaction || {
        text: text,
        amount: amount
    }
    
    const setKey = (key) => (value) => {
        switch (key) {
            case "text":
                setText(value)

            case "amount":
                setAmount(value)
        }
    }
=======
    //console.log(selectedTransaction);

    const [text, setText] = useState(null || selectedTransaction.text);
    const [amount, setAmount] = useState(null || selectedTransaction.amount);
>>>>>>> 4f27201261182da76d51aa362641c6873262d84f

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
<<<<<<< HEAD
                        value={bindingData.text} 
                        onChange={(e) => setKey("text")(e.target.value)} placeholder='Enter Text...'
=======
                        value={text} 
                        onChange={(e) => setText(e.target.value)} placeholder='Enter Text...'
>>>>>>> 4f27201261182da76d51aa362641c6873262d84f
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input 
                        type="number" 
<<<<<<< HEAD
                        value={bindingData.amount} 
                        onChange={(e) => setKey("amount")(e.target.value)} placeholder='Enter Amount...'
                    />
                </div>
                <button onClick={(e) => submit(e)} className='btn'>
                    Add transaction
                </button>
=======
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount...'
                    />
                </div>
                <button onClick={(e) => submit(e)} className='btn'>Add transaction</button>
>>>>>>> 4f27201261182da76d51aa362641c6873262d84f
            </div>
        </Fragment>
    )
}

export default AddTransaction
