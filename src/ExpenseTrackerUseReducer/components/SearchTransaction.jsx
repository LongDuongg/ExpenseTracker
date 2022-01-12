import React, {useContext} from 'react'
import { globalContext } from '../Context/GlobalState';

const SearchTransaction = () => {
    const transactions = useContext(globalContext);

    return (
        <div className='add-form'>
            <div className='form-control'>
                <label htmlFor="search">Search</label>
                <input 
                    value={transactions.searchText} 
                    onChange={(e) => transactions.searchTransaction(e.target.value)} 
                    placeholder='Search for Transaction...'
                />
            </div>
        </div>
    )
}

export default SearchTransaction
