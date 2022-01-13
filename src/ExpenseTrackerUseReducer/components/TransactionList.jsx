import React, {Fragment, useContext} from 'react'
import {globalContext} from '../Context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {

    const {state} = useContext(globalContext);

    const transactionList = state.searchText ? (
        state.transactions.filter((t) => {
<<<<<<< HEAD
            return t.text.toLowerCase().includes(state.searchText.toLowerCase())
        })) : (
            state.transactions
        );
=======
            return t.text.toLowerCase().includes(state.searchText.toLowerCase());
    })) : (
        state.transactions
    );
>>>>>>> 4f27201261182da76d51aa362641c6873262d84f
    
    return (
        <Fragment>
            <h3>History</h3>
            <hr />
            <ul className="list">
                {transactionList.map((t) => {
                    return (
                       <Transaction 
                        key={t.id} 
                        id={t.id} 
                        text={t.text} 
                        amount={t.amount}
                       />
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default TransactionList
