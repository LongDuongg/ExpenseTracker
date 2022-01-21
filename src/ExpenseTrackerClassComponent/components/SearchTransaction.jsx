import React, { Component } from 'react'
import { DBContext } from '../Context/Globaldata';

export default class SearchTransaction extends Component {

  static contextType = DBContext;

  render() {

    const {state, searchTransaction} = this.context;

    return (
      <div className='add-form'>
        <div className='form-control'>
          <label htmlFor="search">Search</label>
          <input 
            value={state.searchText} 
            onChange={(e) => searchTransaction(e.target.value)} 
            placeholder='Search for Transaction...'
          />
        </div>
      </div>
    )
  }
}
 