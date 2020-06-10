import './style/newMessage.css';
import React, { useState, useEffect } from 'react';

export default function NewMessage(props) {
  const [message, setMessage] = useState('');

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const clickHandler = () => {
    props.addMessage(message);
    document.getElementById("msgInput").value = '';
  };

  const enterHandler = (e) => {
    if (e.charCode === 13) {
      props.addMessage(message);
      document.getElementById("msgInput").value = '';
    }
  };

  return (
    <div className='newMsg'>
      <div className='newMsg-box'>
        <input className='input-msg'
               id='msgInput'
               placeholder='Type your message'
               onChange={changeHandler}
               onKeyPress={enterHandler} />
        <input type='button'
               className='enter-btn'
               value='send'
               onClick={clickHandler} />
      </div>
      <div></div>
    </div>
  );
}
