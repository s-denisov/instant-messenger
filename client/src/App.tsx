import React from 'react';
import './App.css';
import Chat from './features/chat/Chat';
import ContactsList from './features/contacts/ContactsList';

function App() {
  return (
    <div style={{ display: 'flex', gap: '5vw' }}>
      <ContactsList />
      <Chat />
      ;
    </div>
  );
}

export default App;
