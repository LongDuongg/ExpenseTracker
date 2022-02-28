import React, { Component } from 'react'
import { bindInput } from '../../common/react/bindInput'
import {setKey} from '../../common/utils/objects'

export default class AddTransaction extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      text: null,
      amount: null
    }
  }

  componentDidUpdate = (prevProp, prevState, snapShot) => {
    if(this.props.editingID && this.props.editingID !== prevState.id) {
      const transaction = this.props.transactions.find((transaction) => (
        transaction.id === this.props.editingID
      ))
      this.setState(transaction)
    }
  }

  onSubmit = () => {
    const {onAdd, onUpdate, editingID} = this.props
    const id = editingID || Date.now.toString();
    const newTransaction = {
      id,
      ...this.state
    }

    editingID === null ? (
      onAdd(newTransaction)
    ) : (
      onUpdate(newTransaction)
    )

    this.setState({
      text: null,
      amount: null
    })
  }

  render() {
    return (
      <div className='add-form'>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input {...{
            ...bindInput({
              value: this.state.text,
              onChange: (v) => this.setState(setKey(this.state, "text", v))
            }),
            placeholder: 'Enter Text...'
            }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">
            Amount <br/>
            (negative - expense, positive - income)
          </label>
          <input {...{
            ...bindInput({
              value: this.state.amount,
              onChange: (v) => this.setState(setKey(this.state, "amount", +v))
            }),
            type: "number",
            placeholder: 'Enter Amount...'
           }}          
          />
        </div>
        <button className='btn' onClick={() =>  this.onSubmit()}>
          Add transaction
        </button>
      </div>
    )
  }
}
