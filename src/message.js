import './message.css';
//import ChatHeader from './chatHeader.js';
import React, { useState, useEffect } from 'react';

export default function Message(props) {

  const formatDate = (dateStr) => {
    let date = new Date(Date.parse(dateStr));
    let hour = date.getHours();
    let year = date.getFullYear().toString();
    hour = hour > 12 ? hour - 12 + ':' + date.getMinutes() + ' PM' :
           hour + ':' + date.getMinutes() + ' AM';
    return `${date.getMonth() + 1}/${date.getDate()}/${year[2]}${year[3]}, ${hour}`;
  }

  const ownerMsg = props.msg.isOwner ? 'message' : 'my-message';

  return (
    <div className={ownerMsg}>
      <div className='icon-box material-icons'>
        <img src={'./' + props.avatarUser} alt='Oops' />
      </div>
      <div className='msg-box'>
        <div className='msg-text'>
          <p>{props.msg.text}</p>
        </div>
        <div className='msg-date'>
          {formatDate(props.msg.date)}
        </div>
      </div>
    </div>
  );
}
