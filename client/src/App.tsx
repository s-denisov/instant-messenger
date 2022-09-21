import React from 'react';
import './App.css';
import Chat from './features/chat/Chat';
import ContactsList from './features/contacts/ContactsList';
import SignUp from './features/login/SignUp';

function App() {
  return (
    <div style={{ display: 'flex', gap: '5vw' }}>
      <ContactsList />
      <Chat />
      <SignUp />
    </div>
  );
}

export default App;
