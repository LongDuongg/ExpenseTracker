import React, { Component } from 'react'
import { DBContext, Consumer } from '../Context/Globaldata'
import {setKey} from '../../common/utils/objects'

export default class AddForm extends Component {
  
  static contextType = DBContext;
  
  constructor(props) {
    super(props)
    
    this.state = {
      text: '',
      amount: 0
    }
  }

  componentDidUpdate = (preProp, preState, snapShot) => {
    const {state} = this.context;
    if(preState.text !== state.transaction.text && preState.amount !== state.transaction.amount) {
      this.setState({
        text: state.transaction.text,
        amount: state.transaction.amount
      });
    }
  }

  setStateKeyClass = (state, key, value) => {
    this.setState(setKey(state, key, value))
  }

  submit = () => {
    const {state,updateTransaction,addTransaction} = this.context;
    const transaction = {
      id: state.editingId || Date.now.toString(), 
      ...this.state
    };

    state.editingId !== null ? (
      updateTransaction(transaction)
    ) : (
      addTransaction(transaction)
    );
    this.setState({text: '', amount: 0});
  }

  render() {

    const {state} = this;

    return (
      <div className='add-form'>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input 
            value={state.text}
            onChange={(e) => this.setStateKeyClass(state, "text", e.target.value)}
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
            value={state.amount}
            onChange={(e) => this.setStateKeyClass(state, "amount", +e.target.value)}
            placeholder='Enter Amount...'
          />
        </div>
        <button onClick={() => this.submit()} className='btn'>
          Add transaction
        </button>
      </div>
    )
  }
}
