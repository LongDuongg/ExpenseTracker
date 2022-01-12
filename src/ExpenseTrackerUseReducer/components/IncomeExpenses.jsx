import React, {useContext} from 'react'
import {sum} from '../../common/utils/collections';
import { globalContext } from '../Context/GlobalState'

const IncomeExpenses = () => {

    const {state} = useContext(globalContext);
    const amount = state.transactions.map((t) => {return t.amount});
    
    // need to check again
    const income = sum(amount.filter((mount) => {return mount > 0}));

    const expense = sum(amount.filter((mount) => {return mount < 0}));
                          
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>
                    ${income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>
                    ${expense}
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
