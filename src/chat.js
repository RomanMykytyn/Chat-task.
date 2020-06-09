import './chat.css';
import React, { useState, useEffect } from 'react';

export default function Chat(props) {
  const lastMsg = getLastMsg(props.chat)
  //console.log(props.chat);

  function getLastMsg(item) {
    let lastDate = 0;
    let lastMsg = '';
    item.conversation.forEach( el => {
      if (el.isOwner && Date.parse(el.date) > lastDate) {
        //console.log(Date.parse(el.date));
        lastDate = Date.parse(el.date);
        lastMsg = el.text;
      }
    });
    return lastMsg;
  }

  const clickHandler = () => {
    props.getChat(props.chat);
  };


  return (
    <div className='chat' onClick={clickHandler}>
      <div className='icon-box material-icons'>
        <img src={'./' + props.chat.avatarUser} alt='Oops' />
      </div>
      <div className='description-box'>
        <h3>{props.chat.nameUser}</h3>
        <p>{lastMsg}</p>
      </div>
      <div className='date-box'>
        <p>{props.chat.dateUser}</p>
      </div>
    </div>
  );
}
