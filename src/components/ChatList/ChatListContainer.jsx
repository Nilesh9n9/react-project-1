import React from 'react'
import ChatListHeader from './ChatListHeader';
import ChatList from './ChatList';

const ChatListContainer = () => {
    return (
        <div className="chat-list w-[30vw] h-[100%] flex flex-col bg-slate-900 text-white">
            <ChatListHeader />
            <ChatList />
        </div>
    )
}

export default ChatListContainer