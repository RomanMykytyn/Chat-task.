import './search.css';
import React, { useState, useEffect } from 'react';

export default function Search(props) {
  return (
    <div className='search'>
      <input type='button' className='search-btn' value='search' />
      <input type='text' className='search-field' />
    </div>
  );
}
