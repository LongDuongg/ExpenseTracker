import React, { Component } from 'react'
import {bindInput} from '../../common/react/bindInput'

export default class SearchTransaction extends Component {
  render() {

    const {searchText, onSearch} = this.props;

    return (
      <div className='add-form'>
        <div className='form-control'>
          <label htmlFor="search">Search</label>
          <input {...{
            ...bindInput({
              value: searchText,
              onChange: (v) => onSearch(v)
            }),
            placeholder: 'Search for Transaction...'
            }}
          />
        </div>
      </div>
    )
  }
}
