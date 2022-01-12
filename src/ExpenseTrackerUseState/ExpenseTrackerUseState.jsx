
import React from 'react'
import {sum} from '../common/utils/collections';

export const ExpenseTrackerUseState = () => {
  const arr = [1,2,3,4];
  return (
    <div>
      expense tracker use state {sum(arr)}
    </div>
  )
}
