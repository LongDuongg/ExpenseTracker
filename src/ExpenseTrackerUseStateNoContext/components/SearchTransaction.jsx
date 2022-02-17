import React from 'react';
import {bindOnChangeInput} from '../../common/react/bindInput'
export const SearchTransaction = ({onSearch}) => {
  return (
    <div className='add-form'>
      <div className='form-control'>
        <label htmlFor="search">Search</label>
        <input
          {
            ...{
              ...bindOnChangeInput({
                onChange: (e) => onSearch(e),
              }),
              placeholder: 'Search for Transaction...'
            }
          }         
        />
      </div>
    </div>
  );
};
