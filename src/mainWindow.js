import './mainWindow.css';
import ChatHeader from './chatHeader.js';
import ChatField from './chatField.js';
import NewMessage from './newMessage.js';
import React, { useState, useEffect } from 'react';

export default function MainWindow(props) {

  return (
    <main>
      <ChatHeader imgUrl={props.chat.avatarUser}
                  name={props.chat.nameUser}/>
      <ChatField chat={props.chat} />
      { props.chat.nameUser &&
        <NewMessage addMessage={props.addMessage} xxx={props.chat.nameUser}/>
      }
    </main>
  );
}
