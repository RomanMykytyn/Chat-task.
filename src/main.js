import './style/main.css';
import data from '../public/initialData.json';
import { v1 as uuidv1 } from 'uuid';
import { render } from 'react-dom';
import SearchBar from './search.js';
import Chat from './chat.js';
import Icon from './icon.js';
import MainWindow from './mainWindow.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [activeChat, setActiveChat] = useState({});

  useEffect(() => {
    setInitialData(data);
    setFilteredData(data);
  }, []);

  const searchUser = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = initialData.filter(user => {
      return user.nameUser.toLowerCase().includes(value);
    });
    setFilteredData(filter);
  };

  const getActiveChat = (item) => {
    setActiveChat(item);
  }

  const addMessage = (message) => {
    makeMessage(message, false);
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        makeMessage(data.value, true);
      });
  }

  const makeMessage = (message, isOwner) => {
    let date = new Date();
    let newMsg = {text: message,
                  date: date,
                  isOwner: isOwner,
                  id: uuidv1()};
    let newData = initialData.map( (el) => {
      if (el.nameUser === activeChat.nameUser) {
        el.conversation.push(newMsg);
        return el;
      }
        return el;
    });
    setInitialData(newData);
  };

  return (
    <>
      <aside>
        <div className='search-box'>
          <Icon avatarUser='no_ava.jpg' />
          <SearchBar search={searchUser} />
        </div>
        <div className='chat-list' id='scroll'>
          <h1>Chats</h1>
          {filteredData.map(el => (<Chat chat={el}
                                         key={el.nameUser}
                                         getChat={getActiveChat} />))}
        </div>
      </aside>
        <MainWindow chat={activeChat}
                    addMessage={addMessage} />
    </>
  );
}

render(<App />, document.getElementById('root'));
