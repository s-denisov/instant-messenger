import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Chat from './features/chat/Chat';
import ContactsList from './features/contacts/ContactsList';
import SignUp from './features/login/SignUp';
import { getEmail, login } from './features/login/userSlice';
import { useAppSelector } from './app/hooks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('/api/username').then((res2) => {
      dispatch(login({ email: res2.data.username }));
    });
  }, []);
  const email = useAppSelector(getEmail);
  return (
    <div style={{ display: 'flex', gap: '5vw' }}>
      { email ? <div>{email}</div> : <div /> }
      <ContactsList />
      <Chat />
      <SignUp />
    </div>
  );
}

export default App;
