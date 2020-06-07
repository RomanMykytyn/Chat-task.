import './main.css';
import { render } from 'react-dom';
import Search from './search.js';
//import Comments from './comments.js';
//import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

function App() {
  const [filteredData, setFilteredData] = useState(null);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8887/initialData.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setInitialData(data);
      });
  }, []);

  return (
    <aside>
      <div className='search-box'>
        <div className='icon-box material-icons'>
          <img src='./no_ava.jpg' alt='Oops' />
        </div>
        <Search />
      </div>
    </aside>
  );
}

render(<App />, document.getElementById('root'));
