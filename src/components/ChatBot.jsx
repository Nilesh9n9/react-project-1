import React from 'react'
import ChatListContainer from './ChatList/ChatListContainer';
import ChatWindow from './ChatWindow/ChatWindow';

const ChatBot = () => {
  return (
    <div className='chat-app flex'>
        <ChatListContainer />
        <ChatWindow />
    </div>
  )
}

export default ChatBot;