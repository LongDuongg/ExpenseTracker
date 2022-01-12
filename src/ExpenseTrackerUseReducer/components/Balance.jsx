import React, {Fragment, useContext} from 'react'
import { globalContext } from '../Context/GlobalState'

const Balance = ({title}) => {

    const {state} = useContext(globalContext);
    const amount = state.transactions.map((t) => {return t.amount});
    const balance = amount.reduce((pre, next) => {return pre += next}, 0).toFixed(2);

    return (
        <Fragment>
            <h2>{title}</h2>
            <h1>${balance}</h1>
        </Fragment>
    )
}

export default Balance
