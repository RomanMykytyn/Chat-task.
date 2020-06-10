import './style/chat.css';
import Icon from './icon.js';
import React, { useState, useEffect } from 'react';

export default function Chat(props) {
  const lastMsg = getLastMsg(props.chat)

  function getLastMsg(item) {
    let lastDate = 0;
    let lastMsg = '';
    item.conversation.forEach( el => {
      if (el.isOwner && Date.parse(el.date) > lastDate) {
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
      <Icon avatarUser={props.chat.avatarUser} />
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
