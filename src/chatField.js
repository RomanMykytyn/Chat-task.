import './style/chatField.css';
import Message from './message.js';
import React, { useState, useEffect } from 'react';

export default function ChatField(props) {
  let page = document.getElementById("chatField");
  let list = '';

  useEffect(() => {
    if (page) {
      page.scrollTop = page.scrollHeight;
    }
  });

  if (props.chat.conversation) {
    list = props.chat.conversation.map(el => (<Message msg={el}
                                                       key={el.id}
                                                       avatarUser={props.chat.avatarUser} />));
  }

  return (
    <div className='chatField' id='chatField'>
      {list}
    </div>
  );
}
