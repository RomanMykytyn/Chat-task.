import './style/search.css';
import React, { useState, useEffect } from 'react';

export default function SearchBar(props) {
  const changeHandler = (e) => {
    props.search(e);
  };

  return (
    <div className='search'>
      <input type='button'
             className='search-btn'
             value='search' />
      <input type='text'
             className='search-field'
             placeholder='Search chat'
             onChange={changeHandler} />
    </div>
  );
}
