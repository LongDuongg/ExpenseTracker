import React from 'react';
import {bindInput} from '../../common/react/bindInput'

export const SearchTransaction = ({searchText, onSearch}) => {
  return (
    <div className='add-form'>
      <div className='form-control'>
        <label htmlFor="search">Search</label>

        <input {...{
          ...bindInput({
            value: searchText,
            onChange: (v) => onSearch(v),
          }),
          placeholder: 'Search for Transaction...'
        }}/>

      </div>
    </div>
  );
};
