import React, { Component } from 'react'
import { DBContext } from '../Context/Globaldata'
import {setKey} from '../../common/utils/objects'
import {bindInput, bindNumberInput} from '../../common/react/bindInput';

export default class AddForm extends Component {
  
  static contextType = DBContext;
  
  constructor(props) {
    super(props)
    
    this.state = {
      text: null,
      amount: null,
    };
  }

  componentDidUpdate = (prevProp, prevState, snapShot) => {
    const {state} = this.context;
    if (this.context.state.editingId && this.context.state.editingId !== prevState.id) {
      const transaction = state.transactions.find((t) => t.id === state.editingId);
      this.setState(transaction);
    }
  }

  submit = () => {
    const {state, updateTransaction, addTransaction} = this.context;

    const transaction = {
      id: state.editingId || Date.now.toString(), 
      ...this.state
    };

    state.editingId !== null ? (
      updateTransaction(transaction)
    ) : (
      addTransaction(transaction)
    );
    this.setState({text: null, amount: null});
  }

  render() {

    const {state} = this;

    return (
      <div className='add-form'>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input {...{
            ...bindInput({
              value: state.text,
              onChange: (v) => this.setState(setKey(state, "text", v)),
            }),
            placeholder: 'Enter Text...' 
          }}/>
        </div>
        <div className='form-control'>
          <label htmlFor="amount">
            Amount <br/>
            (negative - expense, positive - income)
          </label>
          <input {...{
            type: "number",
            ...bindNumberInput({
              value: state.amount,
              onChange: (v) => this.setState(setKey(state, "amount", v)),
            }),
            placeholder: 'Enter Amount...'
          }}/>
        </div>
        <button onClick={() => this.submit()} className='btn'>
          Add transaction
        </button>
      </div>
    )
  }
}
