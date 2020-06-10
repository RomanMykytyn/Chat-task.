import './main.css';
import { v1 as uuidv1 } from 'uuid';
import { render } from 'react-dom';
import SearchBar from './search.js';
import Chat from './chat.js';
import MainWindow from './mainWindow.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [activeChat, setActiveChat] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8887/initialData.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setInitialData(data);
        setFilteredData(data);
      });
  }, []);

  const searchUser = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = initialData.filter(user => {
      return user.nameUser.toLowerCase().includes(value);
    });
    setFilteredData(filter);
    //console.log(filteredData);
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
          <div className='icon-box material-icons'>
            <img src='./no_ava.jpg' alt='Oops' />
          </div>
          <SearchBar search={searchUser} />
        </div>
        <div className='chat-list'>
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
