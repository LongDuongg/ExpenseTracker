import React, {useContext} from 'react'
import { Context } from '../context/GlobalContext'
export const SearchTransaction = () => {

  const {state,searchTransaction} = useContext(Context);

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
