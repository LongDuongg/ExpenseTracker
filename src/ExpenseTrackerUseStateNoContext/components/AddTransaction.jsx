import React, {useState, useEffect} from 'react';
import { bindInput, bindNumberInput } from '../../common/react/bindInput';
import { setKey } from '../../common/utils/objects';
import { setStateKey } from '../../common/react/setStateKey';

export const AddTransaction = ({onAdd, onUpdate, editingID, transactions}) => {

  const [transaction, setTransaction] = useState();
  
  useEffect(
    () => {
      const seletedTransaction = editingID !== null && (
        transactions.find((transaction) => {
          return transaction.id === editingID
        })
      )
  
      setTransaction({
        text: seletedTransaction?.text,
        amount: seletedTransaction?.amount
      })
    }, 
    // eslint-disable-next-line
    [editingID]
  )

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: editingID || Date.now.toString(),
      ...transaction
    }
    editingID === null ? (
      onAdd(newTransaction)
    ) : (
      onUpdate(newTransaction)
    )
    setTransaction(null) 
  }

  return (
    <div className='add-form'>
      <div className='form-control'>
        <label htmlFor="text">Text</label>
        <input 
          {
            ...{
              ...bindInput({
                value: transaction?.text,
                onChange: (v) => setTransaction(setKey(transaction,"text", v))
              }),
              placeholder:'Enter Text...'
            }
          }
        />
      </div>
      <div className='form-control'>
        <label htmlFor="amount">
          Amount <br/>
          (negative - expense, positive - income)
        </label>
        <input 
          {
            ...{
              ...bindNumberInput({
                value: transaction?.amount,
                onChange: (v) => setTransaction(setKey(transaction,"amount", v))
              }),
              type:"number", 
              placeholder:'Enter Amount...'
            }
          }
        />
      </div>
      <button className='btn' onClick={(e) => onSubmit(e)}>
          Add transaction
      </button>
    </div>
  );
};
