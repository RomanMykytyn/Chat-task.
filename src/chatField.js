import './chatField.css';
import Message from './message.js';
import React, { useState, useEffect } from 'react';

export default function ChatField(props) {
  //console.log(props.chat);
  let list = '';
  if (props.chat.conversation) {
    //console.log(list);
    list = props.chat.conversation.map(el => (<Message msg={el}
                                                            key={el.date}
                                                            avatarUser={props.chat.avatarUser} />));
  }


  return (
    <div className='chatField'>
      {list}
    </div>
  );
}
