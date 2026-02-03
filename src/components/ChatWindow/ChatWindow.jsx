import React from 'react'
import ChatWindowHeader from './ChatWindowHeader';
import Chat from './Chat';
import InputFieldForm from './InputFieldForm';

const ChatWindow = () => {
  return (
    <div className="chat-window w-[70vw] h-[100vh] flex flex-col text-white">
        <ChatWindowHeader />
        <Chat />  
        <InputFieldForm />
    </div>
  )
}

export default ChatWindow