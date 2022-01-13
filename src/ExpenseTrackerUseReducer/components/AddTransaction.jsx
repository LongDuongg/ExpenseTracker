import React, {useState, useContext, useEffect} from 'react'
import { globalContext } from '../Context/GlobalState';

const AddTransaction = () => {

    const {state} = useContext(globalContext);
    const {addTransaction, updateTransaction} = useContext(globalContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    useEffect(() => {
      const selectedTransaction = state.editingId !== null && (
        state.transactions.find((transaction) => {
            return transaction.id === state.editingId
        })
      );
      setText(selectedTransaction?.text || "")
      setAmount(selectedTransaction?.amount ?? 0)
    }, [state.editingId, state.transactions])

    const setKey = (key) => (value) => {
        switch (key) {
            case "text":
                setText(value)
                return;

            case "amount":
                setAmount(value)
        }
    }

    const submit = () => {

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
        <>
            <h3>Add new transaction</h3>
            <hr />
            <div className='add-form'>
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input 
                        value={text} 
                        onChange={(e) => setKey("text")(e.target.value)} 
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
                        value={amount} 
                        onChange={(e) => setKey("amount")(e.target.value)} 
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
