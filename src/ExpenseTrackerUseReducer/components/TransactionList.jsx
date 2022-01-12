import React, {Fragment, useContext} from 'react'
import {globalContext} from '../Context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {

    const {state} = useContext(globalContext);

    const transactionList = state.searchText ? (
        state.transactions.filter((t) => {
            return t.text.toLowerCase().includes(state.searchText.toLowerCase());
    })) : (
        state.transactions
    );
    
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
