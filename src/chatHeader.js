import './style/chatHeader.css';
import Icon from './icon.js';
import React, { useState, useEffect } from 'react';

export default function ChatHeader(props) {

  return (
    <div className='chat-header'>
      {props.name &&
        <>
          <Icon avatarUser={props.imgUrl} />
          <div className='description-box'>
            <h1>{props.name}</h1>
          </div>
        </>
      }
    </div>
  );
}
