import React, { useContext } from 'react'
import {FaEdit, FaTimes} from 'react-icons/fa'
import { globalContext } from '../Context/GlobalState';

const Transaction = ({text, amount, id}) => {
    const sign = amount < 0 ? '-' : '+';
    const {chooseTransaction, deleteTransaction} = useContext(globalContext);

    return (
        <li className={amount < 0 ? 'minusCash' : 'plusCash'}>
            {text}
            <span>
                {sign}${Math.abs(amount)}
                <FaEdit 
                    onClick={() => chooseTransaction(id)}
                    style={{color: 'blue', margin: '0px 10px', cursor: 'pointer'}}
                />
                <FaTimes 
                    onClick={() => deleteTransaction(id)} 
                    style={{color: 'red', cursor: 'pointer'}}
                />
            </span>
        </li>
    )
}

export default Transaction
 