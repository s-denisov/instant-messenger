import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Message from './Message';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { newMessage, totalMessages } from './chatSlice';

export default function Chat() {
  const numMessages = useAppSelector(totalMessages);
  const dispatch = useAppDispatch();
  const messagesDisplay = [];
  for (let i = 0; i < numMessages; i++) {
    messagesDisplay.push(<Message messageIndex={i} />);
  }
  const onEntered = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      dispatch(
        newMessage({
          message: { messageText: e.currentTarget.value, isFromUser: true },
        }),
      );
      e.currentTarget.value = '';
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 2 }}>
      {messagesDisplay}
      <input
        style={{
          position: 'fixed',
          bottom: 10,
          width: '70%',
          marginBottom: '2vh',
          alignSelf: 'center',
        }}
        onKeyDown={onEntered}
      />
    </div>
  );
}
