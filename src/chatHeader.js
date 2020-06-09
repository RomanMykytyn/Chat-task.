import './chatHeader.css';
import React, { useState, useEffect } from 'react';

export default function ChatHeader(props) {

  return (
    <div className='chat-header'>
      {props.name &&
        <>
          <div className='icon-box material-icons'>
            <img src={'./' + props.imgUrl} alt='Oops' />
          </div>
          <div className='description-box'>
            <h3>{props.name}</h3>
          </div>
        </>
      }
    </div>
  );
}
