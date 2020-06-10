import './style/icon.css';
import React, { useState, useEffect } from 'react';

export default function Icon(props) {

  return (
    <div className='icon-box material-icons'>
      <img src={'./public/' + props.avatarUser} alt='Oops' />
    </div>
  );
}
